/* Envio de exames e fotos pelo paciente — card no fim da página (2026-09-06)
 *
 * Uso (uma linha antes de </body>):
 *   <script src="../_assets/upload-exames.js" data-paciente-id="<id na plataforma>" data-nome="Primeiro" data-slug="nome-sobrenome" defer></script>
 *
 * Fluxo: Cloudinary Upload Widget (preset unsigned) → sucesso → RPC pública fn_receber_upload_paciente
 * na plataforma, que registra o exame na ficha do paciente, avisa o Ademir e dispara a análise por IA.
 * Sem data-paciente-id válido o card não aparece.
 */
(function () {
  var CLOUD_NAME = "bmhukhrq";
  var PRESET = "pacientes_exames";
  var SUPABASE_URL = "https://kvmokrkvzbeclsuvepwy.supabase.co";
  var ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bW9rcmt2emJlY2xzdXZlcHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNDkxMDUsImV4cCI6MjA5NTYyNTEwNX0.OyOQf5bVJotKz2l_62wkzhbYmxko0PFrfLLRzG8ol6U";
  var WIDGET_SRC = "https://upload-widget.cloudinary.com/global/all.js";
  var MAX_BYTES = 25 * 1000 * 1000;

  var tag = document.currentScript;
  var ds = (tag && tag.dataset) || {};
  var pacienteId = (ds.pacienteId || "").trim();
  var slug = (ds.slug || "").trim() || location.pathname.split("/").filter(Boolean).slice(-2, -1)[0] || "sem-slug";
  var nome = (ds.nome || "").trim();
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(pacienteId)) return;

  var LS_KEY = "exames-enviados-" + slug;

  function montar() {
    var alvo = document.querySelector(".conteudo") || document.querySelector("main") || document.body;
    var sec = document.createElement("section");
    sec.id = "upload-exames";
    sec.setAttribute("style", "max-width:680px;margin:8px auto 0;padding:0 16px 24px");
    sec.innerHTML =
      '<div style="background:var(--creme-suv,#FDFAF5);border:1px solid var(--bege,#EBE4D5);border-radius:14px;padding:18px 18px 16px">' +
        '<div style="font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--ouro,#B8956A);margin-bottom:6px">Exames e fotos</div>' +
        '<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-size:21px;font-weight:600;color:var(--verde,#536147);line-height:1.2;margin-bottom:6px">Enviar para o Ademir</div>' +
        '<p style="font-size:13px;color:var(--cinza,#706B63);line-height:1.55;margin:0 0 14px">Fez exame novo? Mande o PDF ou tire uma foto do resultado. O arquivo entra direto na sua ficha e o Ademir recebe o aviso na hora.</p>' +
        '<button type="button" id="upload-exames-btn" style="display:block;width:100%;background:var(--verde,#536147);color:var(--creme-suv,#FDFAF5);border:none;border-radius:12px;padding:14px 20px;font-family:\'Jost\',sans-serif;font-size:13px;font-weight:600;letter-spacing:.04em;cursor:pointer">Escolher arquivo ou tirar foto</button>' +
        '<ul id="upload-exames-lista" style="list-style:none;margin:12px 0 0;padding:0;display:none"></ul>' +
        '<p style="font-size:11px;color:var(--cinza,#706B63);margin:10px 0 0">PDF ou foto (JPG, PNG, HEIC), até 25 MB por arquivo.</p>' +
      "</div>";
    alvo.appendChild(sec);
    document.getElementById("upload-exames-btn").addEventListener("click", abrir);
    renderHistorico();
  }

  function lerHistorico() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); } catch (e) { return []; }
  }
  function guardarHistorico(item) {
    try {
      var h = lerHistorico();
      h.unshift(item);
      localStorage.setItem(LS_KEY, JSON.stringify(h.slice(0, 5)));
    } catch (e) {}
  }
  function renderHistorico() {
    var ul = document.getElementById("upload-exames-lista");
    var h = lerHistorico();
    if (!ul || !h.length) return;
    ul.style.display = "block";
    ul.innerHTML = h.map(function (i) {
      return '<li style="display:flex;justify-content:space-between;gap:10px;font-size:12px;padding:8px 0;border-top:1px solid var(--bege,#EBE4D5)">' +
        '<span style="color:var(--carvao,#272520);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapar(i.nome) + "</span>" +
        '<span style="color:var(--verde,#536147);white-space:nowrap">' + (i.ok ? "recebido " : "enviado ") + escapar(i.data) + "</span></li>";
    }).join("");
  }
  function escapar(s) {
    return String(s || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  function linhaStatus(nomeArquivo) {
    var ul = document.getElementById("upload-exames-lista");
    ul.style.display = "block";
    var li = document.createElement("li");
    li.setAttribute("style", "display:flex;justify-content:space-between;gap:10px;font-size:12px;padding:8px 0;border-top:1px solid var(--bege,#EBE4D5)");
    li.innerHTML = '<span style="color:var(--carvao,#272520);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapar(nomeArquivo) + '</span><span class="st" style="color:var(--cinza,#706B63);white-space:nowrap">registrando…</span>';
    ul.insertBefore(li, ul.firstChild);
    return li.querySelector(".st");
  }

  function registrar(info) {
    var nomeArquivo = (info.original_filename || "arquivo") + (info.format ? "." + info.format : "");
    var st = linhaStatus(nomeArquivo);
    var corpo = JSON.stringify({
      p_paciente_id: pacienteId,
      p_url: info.secure_url,
      p_nome: nomeArquivo,
      p_formato: info.format || "",
      p_bytes: info.bytes || 0
    });
    var tentativa = 0;
    function enviar() {
      tentativa++;
      return fetch(SUPABASE_URL + "/rest/v1/rpc/fn_receber_upload_paciente", {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: ANON_KEY, Authorization: "Bearer " + ANON_KEY },
        body: corpo
      }).then(function (r) {
        if (r.ok) return r.json();
        return r.json().catch(function () { return {}; }).then(function (e) {
          throw new Error((e && (e.message || e.hint)) || ("HTTP " + r.status));
        });
      });
    }
    var agora = new Date();
    var data = agora.toLocaleDateString("pt-BR") + " " + agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    enviar().catch(function (e) {
      if (tentativa < 2 && /Failed to fetch|NetworkError|HTTP 5/.test(String(e && e.message))) return enviar();
      throw e;
    }).then(function () {
      st.textContent = "recebido, o Ademir foi avisado";
      st.style.color = "var(--verde,#536147)";
      guardarHistorico({ nome: nomeArquivo, data: data, ok: true });
    }).catch(function (e) {
      st.textContent = "enviado, mas o aviso falhou. Avise o Ademir por mensagem.";
      st.style.color = "var(--alerta,#C2785A)";
      guardarHistorico({ nome: nomeArquivo, data: data, ok: false });
      if (window.console) console.error("[upload-exames] registro falhou:", e);
    });
  }

  var widget = null;
  var carregando = null;
  function carregarWidget() {
    if (window.cloudinary && window.cloudinary.createUploadWidget) return Promise.resolve();
    if (carregando) return carregando;
    carregando = new Promise(function (res, rej) {
      var s = document.createElement("script");
      s.src = WIDGET_SRC;
      s.async = true;
      s.onload = res;
      s.onerror = function () { carregando = null; rej(new Error("widget não carregou")); };
      document.head.appendChild(s);
    });
    return carregando;
  }

  function criarWidget() {
    return window.cloudinary.createUploadWidget({
      cloudName: CLOUD_NAME,
      uploadPreset: PRESET,
      folder: "pacientes/" + slug,
      tags: ["paciente_" + pacienteId, slug],
      sources: ["local", "camera"],
      multiple: true,
      maxFiles: 5,
      maxFileSize: MAX_BYTES,
      clientAllowedFormats: ["pdf", "jpg", "jpeg", "png", "webp", "heic", "heif"],
      resourceType: "auto",
      showPoweredBy: false,
      singleUploadAutoClose: false,
      language: "pt",
      text: {
        pt: {
          or: "ou",
          back: "Voltar",
          close: "Fechar",
          menu: { files: "Meus arquivos", camera: "Câmera" },
          local: {
            browse: "Escolher",
            dd_title_single: "Arraste o arquivo aqui",
            dd_title_multi: "Arraste os arquivos aqui",
            drop_title_single: "Solte para enviar",
            drop_title_multiple: "Solte para enviar"
          },
          camera: { capture: "Tirar foto", cancel: "Cancelar", take_pic: "Tirar foto e enviar", explanation: "Aponte a câmera para o resultado do exame e tire a foto." },
          queue: {
            title: "Envios",
            title_uploading_with_counter: "Enviando {{num}} arquivo(s)",
            title_processing_with_counter: "Processando {{num}} arquivo(s)",
            done: "Concluído",
            statuses: { uploading: "Enviando…", processing: "Processando…", error: "Erro", uploaded: "Enviado", aborted: "Cancelado" }
          },
          actions: { upload: "Enviar", close: "Fechar", next: "Próximo" },
          uploader: {
            errors: {
              file_too_large: "Arquivo grande demais ({{size}}). O limite é {{allowed}}.",
              allowed_formats: "Formato não aceito. Use PDF ou foto (JPG, PNG, HEIC).",
              max_number_of_files: "Envie até 5 arquivos por vez."
            }
          }
        }
      },
      styles: {
        palette: {
          window: "#FDFAF5", windowBorder: "#EBE4D5", tabIcon: "#536147", menuIcons: "#536147",
          textDark: "#272520", textLight: "#FFFFFF", link: "#536147", action: "#536147",
          inactiveTabIcon: "#706B63", error: "#C2785A", inProgress: "#B8956A", complete: "#536147", sourceBg: "#F4EFE4"
        }
      }
    }, function (erro, resultado) {
      if (erro) { if (window.console) console.error("[upload-exames] widget:", erro); return; }
      if (resultado && resultado.event === "success" && resultado.info) registrar(resultado.info);
    });
  }

  function abrir() {
    var btn = document.getElementById("upload-exames-btn");
    btn.disabled = true;
    btn.textContent = "Abrindo…";
    carregarWidget().then(function () {
      if (!widget) widget = criarWidget();
      widget.open();
    }).catch(function () {
      alert("Não foi possível abrir o envio agora. Tente de novo em instantes ou mande o arquivo por mensagem ao Ademir.");
    }).then(function () {
      btn.disabled = false;
      btn.textContent = "Escolher arquivo ou tirar foto";
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", montar);
  else montar();
})();

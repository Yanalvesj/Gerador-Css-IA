let botao = document.getElementById("btnGerar");
let chave = "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";
let endereco = "https://api.groq.com/openai/v1/chat/completions";

async function gerarCodigo() {
  let textoUsuario = document.getElementById("prompt").value;
  let blocoCodigo = document.getElementById('bloco-codigo');
  let resultadoCodigo = document.getElementById('resultado-codigo')
  let resposta = await fetch(endereco, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "Você é um gerador de código HTML e CSS. Responda somente com código puro. Nunca use crase, Markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga exatamente o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use o rotate",
        },
        {
          role: "user",
          content: textoUsuario,
        },
      ],
    }),
  });
  let dados = await resposta.json()
  let resultado = dados.choices[0].message.content
  
  blocoCodigo.textContent = resultado
  resultadoCodigo.srcdoc = resultado
}

botao.addEventListener("click", gerarCodigo);

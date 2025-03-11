const saudacao = (nome, mensagem) => {
  let saida = document.getElementById('resultado');
  saida.textContent = `Olá, ${nome}! ${mensagem}`;
};

const cliqueNoBotao = (nomeInput, mensagemInput) => {
  if (
    nomeInput instanceof HTMLInputElement &&
    mensagemInput instanceof HTMLInputElement
  ) {
    let nome = nomeInput.value;
    let mensagem = mensagemInput.value;

    nome = nome === '' ? 'Visitante' : nome;

    mensagem = mensagem === '' ? 'Bem-vindo' : mensagem;
    saudacao(nome, mensagem);
  }
};

const configurarEventoDeSaudacao = () => {
  let exibirBtn = document.getElementById('exibirBtn');
  let nome = document.getElementById('nome');
  let mensagem = document.getElementById('mensagem');

  exibirBtn.addEventListener('click', () => {
    cliqueNoBotao(nome, mensagem);
  });
};

document.addEventListener('DOMContentLoaded', configurarEventoDeSaudacao);

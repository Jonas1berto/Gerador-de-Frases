const buttonFrase = document.querySelector("#btnFrase")
const frase = document.querySelector("#frase")

const frases = [
  "Tudo que o homem pode conceber e acreditar, pode alcançar.",
  "Seja a mudança que você quer ver no mundo.",
  "Sempre parece impossível. Até que seja feito.",
  "Acredite que você pode. Já é a metade do caminho.",
  "Para ser um campeão você precisa acreditar em si mesmo quando ninguém mais acreditar.",
  "Você não precisa enxergar toda a escadaria, apenas tome o primeiro passo.",
  "O pessimista vê dificuldade em toda oportunidade. O otimista vê oportunidade em toda dificuldade.",
  "Você nunca está velho demais para ter um novo objetivo ou sonhar um novo sonho.",
  "Se você pode sonhá-lo, pode consegui-lo.",
  "Sucesso é andar de falha em falha sem perda de entusiasmo.",
  "Não tente se tornar uma pessoa de sucesso, mas sim uma pessoa de valor.",
  "Eu não falhei. Só descobri 10.000 maneiras que não funcionam.",
  "Pequenos feitos realizados são melhores que grandes feitos planejados.",
  "Você erra 100% das vezes que não tenta.",
  "Falhei por diversas e diversas vezes novamente. É por isso que tive sucesso.",
]

function recebaFrase(){ 

  // gerar numero aleatorio
  const totalFrases = frases.length
  const numeroAleatorio = Math.floor(Math.random() * totalFrases)

frase.innerHTML = frases[numeroAleatorio]

document.getElementById('btnFrase').disabled = true
}
export interface QuizQuestion {
  question: string
  options: string[]
  correct: number
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'Qual é o processo que gera a energia das estrelas?',
    options: ['Fissão nuclear', 'Fusão nuclear', 'Combustão química', 'Reações eletromagnéticas'],
    correct: 1,
  },
  {
    question: 'O que acontece com estrelas de baixa massa como o Sol no final de suas vidas?',
    options: ['Explodem como supernova', 'Tornam-se anãs brancas', 'Colapsam em buracos negros', 'Desintegram-se completamente'],
    correct: 1,
  },
  {
    question: 'O que é o horizonte de eventos de um buraco negro?',
    options: ['A órbita estável mais próxima', 'O ponto central do buraco negro', 'A fronteira da qual nada escapa', 'A camada externa de gás'],
    correct: 2,
  },
  {
    question: 'Qual fenômeno permite detectar matéria escura?',
    options: ['Emissão de raios X', 'Lente gravitacional', 'Radiação infravermelha', 'Reflexão de luz visível'],
    correct: 1,
  },
  {
    question: 'O que é a Radiação Cósmica de Fundo?',
    options: ['O brilho das galáxias distantes', 'Radiação remanescente do Big Bang', 'A luz das primeiras estrelas', 'Radiação emitida por buracos negros'],
    correct: 1,
  },
  {
    question: 'Qual método descobriu a maioria dos exoplanetas conhecidos?',
    options: ['Método de trânsito', 'Velocidade radial', 'Imageamento direto', 'Lente gravitacional'],
    correct: 0,
  },
  {
    question: 'O que define a zona habitável de uma estrela?',
    options: ['Distância onde há oxigênio', 'Região com água líquida possível', 'Área sem radiação', 'Orbitas de planetas gasosos'],
    correct: 1,
  },
  {
    question: 'O que é uma nebulosa planetária?',
    options: ['Planeta em formação', 'Gás ejetado por estrela moribunda', 'Nuvem de poeira ao redor de planetas', 'Atmosfera de Júpiter'],
    correct: 1,
  },
  {
    question: 'O que causa as auroras na Terra?',
    options: ['Reflexão da luz solar', 'Interação vento solar com campo magnético', 'Erupções vulcânicas', 'Calor do núcleo terrestre'],
    correct: 1,
  },
  {
    question: 'Quantas luas Júpiter possui aproximadamente?',
    options: ['16', '95', '27', '146'],
    correct: 1,
  },
  {
    question: 'Qual lua de Júpiter é a mais vulcanicamente ativa do Sistema Solar?',
    options: ['Europa', 'Ganimedes', 'Io', 'Calisto'],
    correct: 2,
  },
  {
    question: 'Qual é a estrela mais brilhante do céu noturno?',
    options: ['Polaris', 'Betelgeuse', 'Sirius', 'Rigel'],
    correct: 2,
  },
  {
    question: 'O que é a energia escura?',
    options: ['Um tipo de matéria invisível', 'Força que acelera a expansão do universo', 'Energia emitida por buracos negros', 'Radiação de fundo'],
    correct: 1,
  },
  {
    question: 'Qual foi o primeiro exoplaneta descoberto orbitando uma estrela similar ao Sol?',
    options: ['Proxima Centauri b', '51 Pegasi b', 'Kepler-452b', 'TRAPPIST-1e'],
    correct: 1,
  },
  {
    question: 'Qual planeta tem o dia mais longo que seu ano?',
    options: ['Mercúrio', 'Vênus', 'Marte', 'Netuno'],
    correct: 1,
  },
  {
    question: 'Quantos anos-luz de distância está Proxima Centauri?',
    options: ['4,25 anos-luz', '8,6 anos-luz', '100 anos-luz', '1.000 anos-luz'],
    correct: 0,
  },
  {
    question: 'Qual lua de Saturno possui uma atmosfera mais densa que a da Terra?',
    options: ['Encélado', 'Titã', 'Mimas', 'Reia'],
    correct: 1,
  },
  {
    question: 'O que são manchas solares?',
    options: ['Crateras na superfície do Sol', 'Regiões mais frias causadas por campos magnéticos', 'Áreas onde o Sol está queimando', 'Nuvens de gás na fotosfera'],
    correct: 1,
  },
  {
    question: 'Qual foi a primeira missão a pousar humanos na Lua?',
    options: ['Apollo 13', 'Apollo 11', 'Gemini 4', 'Mercury 9'],
    correct: 1,
  },
  {
    question: 'O que é uma supergigante vermelha?',
    options: ['Estrela jovem muito quente', 'Estrela massiva nos estágios finais de vida', 'Estrela de nêutrons', 'Uma anã marrom'],
    correct: 1,
  },
]

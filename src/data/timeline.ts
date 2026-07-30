export interface TimelineEvent {
  year: string
  title: string
  description: string
  category: 'exploração' | 'descoberta' | 'telescópio' | 'missão'
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '1957',
    title: 'Sputnik 1',
    description: 'A União Soviética lança o primeiro satélite artificial da história, marcando o início da era espacial.',
    category: 'exploração',
  },
  {
    year: '1961',
    title: 'Vostok 1',
    description: 'Yuri Gagarin torna-se o primeiro ser humano no espaço, completando uma órbita ao redor da Terra.',
    category: 'exploração',
  },
  {
    year: '1969',
    title: 'Apollo 11',
    description: 'Neil Armstrong e Buzz Aldrin tornam-se os primeiros humanos a pisar na Lua. "Um pequeno passo para o homem, um salto gigante para a humanidade."',
    category: 'exploração',
  },
  {
    year: '1971',
    title: 'Salyut 1',
    description: 'A União Soviética lança a primeira estação espacial da história.',
    category: 'exploração',
  },
  {
    year: '1977',
    title: 'Voyager 1 e 2',
    description: 'Lançamento das sondas Voyager, que realizariam uma jornada épica pelos planetas gigantes e hoje estão no espaço interestelar.',
    category: 'missão',
  },
  {
    year: '1981',
    title: 'Primeiro Ônibus Espacial',
    description: 'A NASA lança o Columbia, o primeiro ônibus espacial reutilizável, inaugurando uma nova era de voos espaciais.',
    category: 'exploração',
  },
  {
    year: '1990',
    title: 'Telescópio Espacial Hubble',
    description: 'Lançamento do Hubble, que revolucionaria a astronomia com imagens nítidas do cosmos sem a distorção da atmosfera terrestre.',
    category: 'telescópio',
  },
  {
    year: '1992',
    title: 'Primeiros Exoplanetas',
    description: 'Descoberta dos primeiros exoplanetas confirmados, orbitando o pulsar PSR B1257+12.',
    category: 'descoberta',
  },
  {
    year: '1995',
    title: '51 Pegasi b',
    description: 'Michel Mayor e Didier Queloz descobrem o primeiro exoplaneta orbitando uma estrela similar ao Sol, ganhando o Prêmio Nobel em 2019.',
    category: 'descoberta',
  },
  {
    year: '1998',
    title: 'Expansão Acelerada',
    description: 'Observações de supernovas revelam que a expansão do universo está acelerando, levando ao conceito de energia escura.',
    category: 'descoberta',
  },
  {
    year: '2000',
    title: 'Estação Espacial Internacional',
    description: 'A ISS recebe seus primeiros tripulantes, iniciando uma ocupação contínua do laboratório orbital que dura até hoje.',
    category: 'exploração',
  },
  {
    year: '2004',
    title: 'Spirit e Opportunity',
    description: 'Os rovers gêmeos da NASA pousam em Marte para uma missão de 90 dias que duraria anos, revelando evidências de água passada.',
    category: 'missão',
  },
  {
    year: '2006',
    title: 'New Horizons',
    description: 'Lançamento da sonda New Horizons em direção a Plutão, que chegaria em 2015 revelando o planeta anão em detalhes sem precedentes.',
    category: 'missão',
  },
  {
    year: '2012',
    title: 'Curiosity em Marte',
    description: 'O rover Curiosity pousa em Marte usando um guindaste celestial, iniciando a exploração da cratera Gale.',
    category: 'missão',
  },
  {
    year: '2015',
    title: 'Ondas Gravitacionais',
    description: 'O LIGO detecta ondas gravitacionais pela primeira vez, confirmando a previsão de Einstein de 1915 e abrindo uma nova janela para o universo.',
    category: 'descoberta',
  },
  {
    year: '2019',
    title: 'Primeira Imagem de um Buraco Negro',
    description: 'O telescópio Event Horizon Telescope captura a primeira imagem direta de um buraco negro, o M87*, a 55 milhões de anos-luz da Terra.',
    category: 'descoberta',
  },
  {
    year: '2020',
    title: 'Missão Artemis',
    description: 'A NASA anuncia o programa Artemis com o objetivo de retornar humanos à Lua, incluindo a primeira mulher na superfície lunar.',
    category: 'exploração',
  },
  {
    year: '2021',
    title: 'James Webb Space Telescope',
    description: 'Lançamento do Telescópio Espacial James Webb, o maior e mais poderoso telescópio já construído, sucessor do Hubble.',
    category: 'telescópio',
  },
  {
    year: '2021',
    title: 'Perseverance em Marte',
    description: 'O rover Perseverance pousa na cratera Jezero para buscar sinais de vida antiga, acompanhado pelo helicóptero Ingenuity.',
    category: 'missão',
  },
  {
    year: '2022',
    title: 'Primeiras Imagens do Webb',
    description: 'O Telescópio James Webb revela suas primeiras imagens científicas, mostrando galáxias do início do universo com detalhes impressionantes.',
    category: 'telescópio',
  },
  {
    year: '2023',
    title: 'Missão Euclid',
    description: 'Lançamento da missão Euclid da ESA para mapear a geometria do universo escuro e estudar matéria escura e energia escura.',
    category: 'missão',
  },
  {
    year: '2024',
    title: 'Artemis II',
    description: 'Primeira missão tripulada do programa Artemis, levando astronautas ao redor da Lua e de volta, preparando o caminho para o pouso lunar.',
    category: 'exploração',
  },
]

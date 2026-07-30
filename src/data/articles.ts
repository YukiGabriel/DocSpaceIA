export interface ArticleBlock {
  type: 'heading' | 'text' | 'image' | 'video'
  content?: string
  src?: string
  alt?: string
  caption?: string
  videoTitle?: string
}

export interface DocArticle {
  id: string
  title: string
  icon: string
  blocks: ArticleBlock[]
}

export const articles: DocArticle[] = [
  {
    id: "estrelas",
    title: "Noções básicas de estrelas",
    icon: "\u2605",
    blocks: [
      { type: "text", content: "Os astrônomos estimam que o universo possa conter até um septilhão de estrelas – isso mesmo, um número 1 seguido de 24 zeros. Só a nossa Via Láctea contém mais de 100 bilhões, incluindo a estrela mais estudada, o Sol. As estrelas são gigantescas bolas de gás quente – principalmente hidrogênio, com um pouco de hélio e pequenas quantidades de outros elementos. Cada estrela tem seu próprio ciclo de vida, que varia de alguns milhões a trilhões de anos, e suas propriedades mudam à medida que envelhece." },
      { type: "heading", content: "Nascimento" },
      { type: "text", content: "As estrelas se formam em grandes nuvens de gás e poeira chamadas nuvens moleculares. Essas nuvens têm massas que variam de 1.000 a 10 milhões de vezes a do Sol e podem se estender por centenas de anos-luz. O frio nessas nuvens faz com que o gás se aglomere, criando bolsões de alta densidade. Eventualmente, a gravidade faz com que alguns desses aglomerados colapsem. Quando isso acontece, o atrito faz com que o material aqueça, levando ao desenvolvimento de uma protoestrela." },
      { type: "image", src: "images/Carina_Nebula-1.jpeg", alt: "Nebulosa de Carina", caption: "A borda de um berçário estelar próximo, chamado NGC 3324, localizado no canto noroeste da Nebulosa de Carina." },
      { type: "heading", content: "Vida" },
      { type: "text", content: "Após milhões de anos, imensas pressões e temperaturas no núcleo da estrela comprimem os núcleos dos átomos de hidrogênio, formando hélio — um processo chamado fusão nuclear. A fusão nuclear libera energia, que aquece a estrela e impede que ela colapse ainda mais sob a ação da gravidade. Os astrônomos chamam de estrelas da sequência principal as estrelas que estão passando por fusão nuclear estável. Esta é a fase mais longa da vida de uma estrela." },
      { type: "image", src: "images/Sun_Emits_Flare.jpeg", alt: "Erupção Solar", caption: "O nosso Sol, uma estrela da sequência principal, emite fortes flashes de erupção solar." },
      { type: "text", content: "O gás de uma estrela fornece seu combustível, e sua massa determina a rapidez com que ela consome esse suprimento. Estrelas de menor massa queimam por mais tempo, com menos brilho e a temperaturas mais baixas. Estrelas mais massivas precisam queimar combustível a uma taxa mais alta para gerar a energia que as impede de colapsar sob seu próprio peso." },
      { type: "heading", content: "Morte" },
      { type: "text", content: "No início do fim da vida de uma estrela, seu núcleo fica sem hidrogênio para converter em hélio. A compressão do núcleo aumenta sua temperatura e pressão, fazendo com que a estrela se expanda lentamente. Os detalhes dos estágios finais dependem fortemente de sua massa." },
      { type: "image", src: "images/The_Helix_Nebula-1.jpeg", alt: "Nebulosa da Hélix", caption: "A Nebulosa da Hélix, também conhecida como NGC 7293, é um exemplo típico de nebulosa planetária." },
      { type: "text", content: "Para estrelas de baixa massa (como o Sol), as camadas externas se desprendem, criando uma nebulosa planetária. O que resta é o núcleo, chamado anã branca, que esfria gradualmente ao longo de bilhões de anos. Para estrelas massivas, a fusão continua até o ferro, momento em que o núcleo colapsa e rebate, gerando uma explosão de supernova. O núcleo sobrevive como uma estrela de nêutrons ou um buraco negro." },
    ]
  },
  {
    id: "buracos-negros",
    title: "Noções básicas sobre buracos negros",
    icon: "\u25CF",
    blocks: [
      { type: "text", content: "Buracos negros estão entre os objetos cósmicos mais misteriosos, muito estudados, mas ainda não totalmente compreendidos. Esses objetos não são realmente buracos. São enormes concentrações de matéria compactadas em espaços minúsculos. Um buraco negro é tão denso que a gravidade logo abaixo de sua superfície, o horizonte de eventos, é tão forte que nada — nem mesmo a luz — consegue escapar." },
      { type: "image", src: "images/sub-warped-gaia-000000-14x5-1.png", alt: "Buraco Negro" },
      { type: "heading", content: "Encontrando buracos negros" },
      { type: "text", content: "Buracos negros não emitem nem refletem luz, o que os torna praticamente invisíveis. Os cientistas os detectam e estudam com base em como eles afetam o ambiente ao redor:" },
      { type: "text", content: "\u2605 Discos de acreção — anéis de gás e poeira que emitem luz em vários comprimentos de onda, incluindo raios X." },
      { type: "text", content: "\u2605 Órbitas estelares — a gravidade de um buraco negro supermassivo faz com que estrelas próximas orbitem de maneira específica. Isso comprovou a existência de Sagitário A* no centro da Via Láctea." },
      { type: "text", content: "\u2605 Ondas gravitacionais — ondulações no espaço-tempo causadas por objetos massivos em aceleração." },
      { type: "text", content: "\u2605 Lentes gravitacionais — a curvatura da luz ao redor de objetos massivos." },
      { type: "image", src: "images/webb-STScI-01JKREFYNJE7MT5SG2H0FBYG75-2K.png", alt: "Sagitário A*", caption: "Ilustração do buraco negro supermassivo Sagitário A* no centro da Via Láctea." },
      { type: "heading", content: "O que buracos negros NÃO são" },
      { type: "text", content: "\u2605 Buracos de minhoca — eles não fornecem atalhos entre diferentes pontos no espaço, nem portais para outras dimensões." },
      { type: "text", content: "\u2605 Aspiradores cósmicos — buracos negros não sugam matéria. De uma distância suficiente, seus efeitos gravitacionais são iguais aos de outros objetos de mesma massa." },
      { type: "video", src: "https://www.youtube.com/embed/nJ4d4QEDOYM?si=uNOuVdgKIIY4zRcS", videoTitle: "Buracos negros: o que são realmente?" },
    ]
  },
  {
    id: "galaxias",
    title: "Noções básicas sobre galáxias",
    icon: "\u221E",
    blocks: [
      { type: "text", content: "As galáxias são compostas por estrelas, planetas e vastas nuvens de gás e poeira, todas unidas pela gravidade. As maiores contêm trilhões de estrelas e podem ter mais de um milhão de anos-luz de diâmetro. As menores podem conter alguns milhares de estrelas e ter apenas algumas centenas de anos-luz de diâmetro." },
      { type: "image", src: "images/spiral-galaxy-jpg.png", alt: "Galáxia Espiral" },
      { type: "text", content: "A maioria das grandes galáxias possui buracos negros supermassivos em seus centros. As galáxias apresentam uma variedade de formas: espirais, elípticas e irregulares. A maioria tem entre 10 bilhões e 13,6 bilhões de anos." },
      { type: "heading", content: "Nossa Via Láctea" },
      { type: "text", content: "Nossa galáxia, a Via Láctea, é uma galáxia espiral com um disco de estrelas que se estende por mais de 100.000 anos-luz. A Terra está localizada em um dos braços espirais, aproximadamente a meio caminho do centro. Nosso sistema solar leva cerca de 240 milhões de anos para orbitar a Via Láctea uma única vez." },
      { type: "image", src: "images/Milky_Way_illustration-1.jpeg", alt: "Via Láctea", caption: "Ilustração da Via Láctea, nossa galáxia natal." },
      { type: "text", content: "A Via Láctea está em uma vizinhança com mais de 50 outras galáxias chamada Grupo Local. O Grupo Local faz parte do superaglomerado de Laniakea. A galáxia grande mais próxima é Andrômeda, que está em rota de colisão com a Via Láctea em cerca de 4,5 bilhões de anos." },
    ]
  }
]

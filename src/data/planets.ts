import type { PlanetInfo } from './types'

export { type PlanetInfo } from './types'

export const planets: PlanetInfo[] = [
  {
    name: "Mercúrio",
    image: "Mercurio.png",
    type: "Terrestre",
    color: "#a0a0a0",
    diameter: "4.879 km",
    distanceFromSun: "57,9 milhões km",
    dayLength: "58,6 dias terrestres",
    yearLength: "88 dias terrestres",
    gravity: "3,7 m/s² (38% da Terra)",
    temperature: "-180°C a 430°C",
    moonsCount: 0,
    description: "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar. Seu diâmetro é de aproximadamente 4.880 km, apenas um pouco maior que a Lua da Terra. Não tem atmosfera densa — o que existe é uma exosfera extremamente fina que não consegue reter calor. Por isso, a temperatura varia de forma absurda: até 430 °C de dia e -180 °C à noite. A superfície é cheia de crateras, semelhante à Lua. Possui um núcleo de ferro desproporcionalmente grande, ocupando cerca de 85% do raio do planeta, o que o torna extremamente denso. Uma curiosidade: o dia solar em Mercúrio (176 dias terrestres) é maior que seu ano (88 dias)."
  },
  {
    name: "Vênus",
    image: "Venus.png",
    type: "Terrestre",
    color: "#e0c080",
    diameter: "12.104 km",
    distanceFromSun: "108,2 milhões km",
    dayLength: "243 dias terrestres",
    yearLength: "225 dias terrestres",
    gravity: "8,9 m/s² (91% da Terra)",
    temperature: "465°C (média)",
    moonsCount: 0,
    description: "Vênus é o planeta mais quente do Sistema Solar, apesar de não ser o mais próximo do Sol. Sua atmosfera densa de dióxido de carbono com nuvens de ácido sulfúrico cria um efeito estufa descontrolado, mantendo a temperatura média em 465°C. A pressão atmosférica na superfície é 92 vezes maior que a da Terra. Gira em sentido retrógrado (o Sol nasce no oeste) e seu dia é mais longo que seu ano. Tem tamanho e massa próximos aos da Terra, sendo chamado de 'gêmeo da Terra' — mas com condições completamente inóspitas."
  },
  {
    name: "Terra",
    image: "Terra.png",
    type: "Terrestre",
    color: "#4a90d9",
    diameter: "12.756 km",
    distanceFromSun: "149,6 milhões km",
    dayLength: "24 horas",
    yearLength: "365,25 dias",
    gravity: "9,8 m/s²",
    temperature: "-89°C a 57°C",
    moonsCount: 1,
    description: "A Terra é o único planeta conhecido com vida. 71% da superfície é coberta por água líquida, fator essencial para a regulação térmica e para a vida. Sua atmosfera equilibrada de nitrogênio e oxigênio, combinada com o campo magnético gerado pelo núcleo de ferro líquido, protege o planeta da radiação solar. As placas tectônicas reciclam carbono e regulam a composição atmosférica em escalas geológicas. A Lua estabiliza o eixo de rotação, garantindo estabilidade climática de longo prazo."
  },
  {
    name: "Marte",
    image: "Marte.png",
    type: "Terrestre",
    color: "#c1440e",
    diameter: "6.792 km",
    distanceFromSun: "227,9 milhões km",
    dayLength: "24,6 horas",
    yearLength: "687 dias terrestres",
    gravity: "3,7 m/s² (38% da Terra)",
    temperature: "-125°C a 20°C",
    moonsCount: 2,
    description: "Marte, o 'Planeta Vermelho', tem coloração avermelhada devido ao óxido de ferro no solo. Possui a maior montanha do Sistema Solar, o Monte Olimpo (22 km), e o maior cânion, Valles Marineris (4.000 km). Sua atmosfera fina (95% CO2) não retém calor, resultando em temperatura média de -60°C. Evidências geológicas indicam que Marte já teve água líquida em seu passado. Atualmente, missões como Perseverance buscam sinais de vida microbiana passada."
  },
  {
    name: "Júpiter",
    image: "Jupiter.png",
    type: "Gigante Gasoso",
    color: "#c88b3a",
    diameter: "142.984 km",
    distanceFromSun: "778,5 milhões km",
    dayLength: "9,9 horas",
    yearLength: "11,86 anos",
    gravity: "24,8 m/s² (2,5× Terra)",
    temperature: "-110°C (topo das nuvens)",
    moonsCount: 95,
    description: "Júpiter é o maior planeta do Sistema Solar — cabem mais de 1.300 Terras dentro dele. É um gigante gasoso composto principalmente de hidrogênio e hélio. A Grande Mancha Vermelha é uma tempestade maior que a Terra, ativa há pelo menos 350 anos. Gira tão rápido (10 horas) que se achata visivelmente nos polos. Seu campo magnético é o mais poderoso entre os planetas. Possui mais de 90 luas, incluindo Europa, que tem um oceano subterrâneo."
  },
  {
    name: "Saturno",
    image: "Saturno.png",
    type: "Gigante Gasoso",
    color: "#e8d5a3",
    diameter: "120.536 km",
    distanceFromSun: "1,43 bilhões km",
    dayLength: "10,7 horas",
    yearLength: "29,46 anos",
    gravity: "10,4 m/s² (1,06× Terra)",
    temperature: "-140°C (topo das nuvens)",
    moonsCount: 146,
    description: "Saturno é famoso por seus anéis compostos de gelo e rocha, que se estendem por centenas de milhares de km mas têm apenas metros de espessura. É tão pouco denso que flutuaria na água. Apresenta um padrão hexagonal persistente no polo norte, causado por correntes atmosféricas estáveis. Titã, sua maior lua, tem atmosfera densa e lagos de metano líquido. Encélado expele jatos de água de um oceano subterrâneo."
  },
  {
    name: "Urano",
    image: "Urano.png",
    type: "Gigante de Gelo",
    color: "#73c2d4",
    diameter: "51.118 km",
    distanceFromSun: "2,87 bilhões km",
    dayLength: "17,2 horas",
    yearLength: "84 anos",
    gravity: "8,7 m/s² (89% da Terra)",
    temperature: "-224°C",
    moonsCount: 27,
    description: "Urano é um gigante de gelo com coloração azul-esverdeada devido ao metano na atmosfera. Sua característica mais bizarra é a inclinação axial de 98°, fazendo com que 'gire de lado'. Cada polo passa 42 anos em luz solar contínua, seguidos por 42 anos de escuridão. É o planeta mais frio do Sistema Solar, mesmo não sendo o mais distante do Sol. Possui anéis discretos e 27 luas conhecidas."
  },
  {
    name: "Netuno",
    image: "Netuno.png",
    type: "Gigante de Gelo",
    color: "#3f54ba",
    diameter: "49.528 km",
    distanceFromSun: "4,5 bilhões km",
    dayLength: "16,1 horas",
    yearLength: "164,8 anos",
    gravity: "11,2 m/s² (1,14× Terra)",
    temperature: "-218°C",
    moonsCount: 16,
    description: "Netuno é o planeta mais distante do Sol e possui os ventos mais rápidos do Sistema Solar, ultrapassando 2.000 km/h. Sua coloração azul intensa vem do metano atmosférico. Foi o primeiro planeta descoberto por cálculo matemático antes da observação direta. Tritão, sua maior lua, orbita em sentido retrógrado e apresenta atividade criovulcânica. Desde sua descoberta em 1846, ainda não completou uma órbita ao redor do Sol."
  }
]

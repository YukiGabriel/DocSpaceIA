export default function About() {
  return (
    <main className="h-full bg-gray-900 overflow-y-auto relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 3 + 2) + 's',
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Sobre o <span className="text-blue-500">DocSpaceIA</span>
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              O DocSpaceIA nasceu da necessidade de organizar o vasto e fragmentado conhecimento sobre
              o universo em um ambiente digital estruturado, acessível e intelectualmente rigoroso. Em um
              cenário onde informações sobre o espaço circulam de forma superficial, sensacionalista ou
              imprecisa, nossa proposta é diferente: oferecer conteúdo fundamentado, contextualizado e
              tecnicamente responsável.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Somos uma plataforma dedicada à documentação e análise de temas relacionados à
              astronomia, astrofísica, exploração espacial, cosmologia, engenharia aeroespacial e avanços
              tecnológicos vinculados ao estudo do cosmos. Nosso foco não está apenas em apresentar fatos,
              mas em explicar processos, conceitos e implicações científicas com profundidade adequada e
              linguagem clara.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              O universo não é simples. Ele envolve escalas de tempo quase inconcebíveis, distâncias
              absurdas e fenômenos físicos que desafiam a intuição humana. Por isso, estruturamos nossos
              conteúdos de forma progressiva, conectando fundamentos teóricos a aplicações práticas e
              descobertas recentes.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              No DocSpaceIA, acreditamos que a divulgação científica deve respeitar a inteligência do
              leitor. Não reduzimos a complexidade a slogans vazios, mas também não transformamos ciência
              em algo inacessível. Nosso compromisso é equilibrar precisão e clareza.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Além de informar, buscamos estimular pensamento crítico. O espaço não é apenas um
              espetáculo visual; é um campo de investigação contínua que redefine nossa compreensão sobre
              matéria, energia, tempo e origem.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              O conhecimento sobre o universo está em constante evolução. Novas observações, novos
              instrumentos e novas teorias surgem a cada ano. O DocSpaceIA acompanha esse movimento com
              atualização contínua, revisão de conteúdos e expansão temática, mantendo a integridade
              científica como prioridade.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-medium text-blue-400">
              DocSpaceIA é mais do que um site sobre o espaço. É um ambiente digital de estudo,
              documentação e exploração racional do cosmos.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

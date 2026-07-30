# DocSpaceIA

Portal de documentação interativa sobre astronomia, astrofísica e exploração espacial.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Capacitor](https://img.shields.io/badge/Capacitor-8-119EFF?logo=capacitor)](https://capacitorjs.com)

## Funcionalidades

- **Documentação** — Planetas, luas, estrelas e artigos científicos com busca e modal interativo
- **Artigos** — 10 artigos completos com sumário, glossário interativo e modo leitura
- **Comparador de Planetas** — Compare propriedades de dois planetas lado a lado
- **Quiz Astronômico** — Teste seus conhecimentos com perguntas aleatórias
- **Linha do Tempo** — Explore 22 eventos históricos da exploração espacial
- **Busca Global** — Pesquise em todo o conteúdo do site
- **Tema Claro/Escuro** — Alternância com detecção automática do sistema
- **Responsivo** — Layout adaptável para desktop e mobile
- **App Android** — APK gerado via Capacitor

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page com estrelas animadas |
| `/documentation` | Documentação com tabs e comparador |
| `/articles` | Artigos com sumário, glossário e modo leitura |
| `/timeline` | Linha do tempo espacial interativa |
| `/quiz` | Quiz astronômico |
| `/search` | Busca global |
| `/about` | Sobre o projeto |
| `/contact` | Contato dos criadores |

## Tech Stack

- **React 19** + **TypeScript 5.8**
- **Vite 7** — bundler ultrarrápido
- **Tailwind CSS v4** — estilização utilitária
- **React Router DOM v7** — SPA routing
- **Capacitor 8** — build nativo Android

## Comandos

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run build:mobile # Build + sincroniza Capacitor para Android
npm run open:android # Abrir projeto no Android Studio
```

## Estrutura

```
src/
├── context/         # Providers (Theme, ReadingMode)
├── data/            # Dados (planetas, artigos, quiz, timeline, glossário)
├── components/      # Componentes reutilizáveis
└── pages/           # Páginas do site
```

## APK Android

O APK está disponível na raiz do projeto: **`DocSpaceIA.apk`**

Para gerar novamente:
```bash
npm run build:mobile
# Ou abra android/ no Android Studio e faça o build
```

## Licença

MIT

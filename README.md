# Portfólio — José Gabriel

Portfólio pessoal para apresentar minha trajetória profissional, habilidades, projetos e formas de contato. Na página de contato, também é possível baixar meu currículo em PDF.

## Como foi feito

Construído com **Next.js 15**, **React 19** e **TypeScript**. As páginas usam o App Router do Next.js, com estilos feitos em **Tailwind CSS** e ícones da biblioteca **React Icons**.

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para validar a versão de produção:

```bash
npm run lint
npm run build
```

## Estrutura

- `src/app/page.tsx` — apresentação e trajetória profissional
- `src/app/projects/page.tsx` — projetos
- `src/app/skills/page.tsx` — habilidades
- `src/app/contact/page.tsx` — contatos e download do currículo
- `public/` — arquivos estáticos, como imagens e currículo

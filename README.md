# hisamikurita-techblog

## Technologies

- [Next.js](https://nextjs.org/) (Using Pages Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/primitives/)
- [Tailwind CSS](https://tailwindcss.com/)
- [microCMS](https://microcms.io/)
- [Github Actions](https://github.co.jp/features/actions/)

## Architecture

![システム構成図](https://github.com/hisamikurita/hisamikurita-techblog/assets/47776346/8d9e53a2-f36f-4b71-9a0c-8aeab3c1d70c)

## Usage

- Node.js >=18.0.0

## Local Setup

1. Creating Env File

Contact the operator if you want to get the value of an env variable

```bash
cp .env.sample .env
```

2. Package Installation

```bash
npm ci
```

3. Launch

```bash
npm run dev
```

If you can access <http://localhost:3000/> the setup was successful.

## Linters

Linting is executed at pre-commit using [husky](https://typicode.github.io/husky/)

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

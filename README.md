# hisamikurita-techblog

## 使用技術

- Next.js
- TypeScript
- Tailwind CSS
- microCMS
- Github Actions

## ホスティング

レンタルサーバーを使用。SSG でページを静的生成 Github Actions でデプロイ。microCMS を更新した場合は webhook を使用して、Github Actions を起動させる。

## microCMS プレビュー

リアルタイムに変更を反映したいため、CSR でレンダリングさせる。

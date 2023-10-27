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

`pages/preview`配下はプレビュー用ページで、アクセス制限をかける。またこのページはリアルタイムに変更を反映したいため、CSR でレンダリングさせる。

## 画像について

<https://github.com/dc7290/next-export-optimize-images>を使用して SSG でも`next/image`が使用できるようにする。
microCMS にホスティングされている画像は画像 API 機能を使用して最適化を行う。

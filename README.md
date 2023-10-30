# hisamikurita-techblog

## 使用技術

- Next.js
- TypeScript
- Tailwind CSS
- microCMS
- Github Actions

## ホスティング

本プロジェクトはレンタルサーバーを使用しています。SSG でページを静的生成して Github Actions でデプロイします。microCMS を更新した場合は webhook を使用して、Github Actions を起動させます。

## microCMS プレビュー

`pages/preview`配下はプレビュー用ページでアクセス制限をかけます。またこのページは microCMS の下書きの変更をリアルタイムに反映したいため、CSR でレンダリングさせます。

## 画像について

ローカルの画像は<https://github.com/dc7290/next-export-optimize-images>を使用させていただき SSG でも`next/image`が使用できるようにします。

```bash
import Image from "next/image";

<Image src="/images/hoge.jpg" alt="hoge" width={1280} height={800} className=""/>
```

microCMS にホスティングされている画像は画像 API 機能を使用して最適化を行います。

```bash
<img src="https://images.microcms-assets.io/assets/xxxxx/xxxxx/hoge.jpg?fm=webp&q=80" alt="hoge" width={1280} height={800}
/>
```

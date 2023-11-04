# hisamikurita-techblog

## 使用技術

- Next.js (Using Pages Router)
- TypeScript
- Tailwind CSS
- microCMS
- Github Actions

## ホスティング

本プロジェクトはレンタルサーバーを使用しています。SSG でページを静的生成して Github Actions でデプロイします。microCMS を更新した場合は webhook を使用して、Github Actions を起動させます。

## microCMS プレビュー

`src/pages/preview`配下はプレビュー用ページでアクセス制限をかけます。またこのページは microCMS の下書きの変更をリアルタイムに反映したいため、CSR でレンダリングさせます。

## フロントエンド コーディング規約

### コンポーネントについて

- コンポーネントは`src/components/`直下に全てフラットに置きます。
- ファイル名はなるべく属性を先頭に持ってきて、一覧で見たときに探しやすい状態を維持するようにしてください。（ex.「BaseHoge」「PageHoge」「CardHoge」「ButtonHoge」など）
- `pages`ディレクトリはデータの取得のみにして、`src/components/PageHoge`に受け渡します。

### スタイリングについて

[Tailwind CSS](https://tailwindcss.com/)を使用してスタイリングを行います。独自のクラスや既存の値を上書きするような設定を行う場合はなるべく避けたいですが、必要な場合はプロジェクトごとに話し合い決定します。

### 画像について

ローカルの画像は[next-export-optimize-images](https://github.com/dc7290/next-export-optimize-images)を使用させていただき SSG でも`next/image`が使用できるようにします。

```bash
import Image from "next/image";

<Image src="/images/hoge.jpg" alt="hoge" width={1280} height={800} className=""/>
```

microCMS にホスティングされている画像は画像 API 機能を使用して最適化を行います。

```bash
<img src="https://images.microcms-assets.io/assets/xxxxx/xxxxx/hoge.jpg?fm=webp&q=80" alt="hoge" width={1280} height={800} decoding="async"/>
```

## Linter

Lint は`husky`を使用してプリコミット時に実行します。以下の vscode プラグインをインストールすると vscode 保存時にも Lint が実行されます。

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

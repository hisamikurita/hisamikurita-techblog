# hisamikurita-techblog

## 使用技術

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/primitives/)
- [Tailwind CSS](https://tailwindcss.com/)
- [microCMS](https://microcms.io/)
- [Github Actions](https://github.co.jp/features/actions/)

## システム構成図

https://github.com/hisamikurita/hisamikurita-techblog/assets/47776346/9a7181af-5ad9-465d-95e5-28cb5fb6e85f

## Git

### ブランチ運用

開発はfeatureブランチを作成して行なってください。ブランチ運用については、開発進行、リリース前後を考慮して適宜変更します。

- main: レビュー済みの安定したブランチ。
- feature: 機能の追加用。main から分岐して、main に適宜マージしてください。

### コミットメッセージ

TBD

### コードレビュー

プルリクを送る際は[くりちゃん](https://github.com/hisamikurita)をレビュワーに設定してください。

## ローカル開発環境構築手順

### 推奨環境

- Node.js >=18.0.0

### env ファイルの作成

`.env.sample`を複製して`.env`を作成します。プロジェクトの環境変数の値を記述して保存してください。

### パッケージインストール

```bash
npm ci
```

### 起動

```bash
npm run dev
```

<http://localhost:3000/> で確認できれば成功です。

## フロントエンド コーディング規約

### コンポーネントについて

- コンポーネントは`src/components/`直下に全てフラットに置きます。
- ファイル名はなるべく属性を先頭に持ってきて、一覧で見たときに探しやすい状態を維持するようにしてください。（ex.「BaseHoge」「PageHoge」「CardHoge」「ButtonHoge」など）
- `pages`ディレクトリはデータの取得のみにして、`src/components/PageHoge`に受け渡します。

### スタイリングについて

- [Tailwind CSS](https://tailwindcss.com/)を使用してスタイリングを行います。
- 独自のクラスや既存の値を上書きするような設定を行うことはなるべく避けたいですが、必要な場合はプロジェクトごとに話し合い決定します。
- 機能を持つコンポーネントに関しては[Radix UI](https://www.radix-ui.com/primitives/)を使用します。
- 機能を持たないコンポーネントは通常通りマークアップを行います。

### 画像について

ローカルの画像は[next-export-optimize-images](https://github.com/dc7290/next-export-optimize-images)を使用して SSG でも`next/image`が使用できるようにします。

```bash
import Image from "next/image";

<Image src="/images/hoge.jpg" alt="hoge" width={1280} height={800} className=""/>
```

microCMS にホスティングされている画像は画像 API 機能を使用して最適化を行います。

```bash
<img src="https://images.microcms-assets.io/assets/xxxxx/xxxxx/hoge.jpg?fm=webp&q=80" alt="hoge" width={1280} height={800} decoding="async"/>
```

### microCMS プレビュー機能について

`src/pages/preview`配下はmicroCMSのプレビュー用ページ用のフォルダでアクセス制限をかけます。またこのページは microCMS の下書きの変更をリアルタイムに反映したいため、CSR でレンダリングを行います。

## Linter

Lint は[husky](https://typicode.github.io/husky/)を使用してプリコミット時に実行されます。

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

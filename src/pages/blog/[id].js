import { client } from "../../libs/client";
import styles from "../../styles/components/Details.module.scss";

const Details = ({ blog }) => {
  return (
    <div className={styles.root}>
      <div className="container">
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </div>
    </div>
  );
}

// 静的生成のためのパスを指定する
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す
// getStaticPropsはビルド時にサーバー側で呼ばれる関数
// ビルド時にデータを取得し、静的なHTMLを出力する
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default Details;
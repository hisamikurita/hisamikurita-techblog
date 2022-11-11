import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/components/Index.module.scss";

const Index = ({ blog }) => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <span className={styles.text}>{blog.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// データをテンプレートに受け渡す
// getStaticPropsはビルド時にサーバー側で呼ばれる関数
// ビルド時にデータを取得し、静的なHTMLを出力する
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Index;
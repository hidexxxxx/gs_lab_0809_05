// この部分に必要な部分をimportします😊
import Link from "next/link";
import { client } from "../../libs/client";

// SSGでデータ取得の場合はNext独自のgetStaticPropsを使って取得します😊
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });

  console.log(data.contents, "中身");

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      <h1>ブログ</h1>

      {blog &&
        blog.map((item, index) => (
          <div key={item.id}>
            {/* 以下ダイナミックルーティング */}
            <Link href={`blog/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
}
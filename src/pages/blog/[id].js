import { client } from "../../../libs/client";

// SSGのデータ取得。getStaticPropsはデータ取得のおまじない
export const getStaticProps = async (url) => {
    const id = url.params.id;
    const data = await client.get({
        endpoint: "blog",
        contentId: id,
    });

    return {
        props: {
            blog: data,
        },
    };
};

// getStaticPropsはurlが存在するかチェックするおまじない
export const getStaticPaths = async () => {
    const data = await client.get({
        endpoint: "blog",
    });
    // contentsの中に
    const paths = data.contents.map((content) => `/blog/${content.id}`);

    return {
        paths,
        fallback: false,
    };
};

export default function BlogId({ blog }) {
    return (
        <div>
            <h1>{blog.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: `${blog.text}` }}></p>
            {/* <p>{blog.contents}</p> */}
        </div>
    );
};
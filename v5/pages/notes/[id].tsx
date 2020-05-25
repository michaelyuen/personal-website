import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Date from "../../components/Date";
import { getAllNoteIds, getNoteData } from "../../lib/notes";

type Props = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

export default function Note({ postData }: Props) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllNoteIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getNoteData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

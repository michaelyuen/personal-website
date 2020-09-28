import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Note from "../../components/Note";
import { getAllNoteIds, getNoteData } from "../../lib/notes";

type Props = {
  postData: {
    content: string;
    date: string;
    title: string;
  };
};

export default function NotePage({ postData }: Props) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Note data={postData} />
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

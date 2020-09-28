---
title: Hello World
description: My first usage of Typora
date: '2020-04-01'
tags:
- hello-world
- first-note
- typora
absolute-note-number: 1
zettel: 1
---



# Hello World

This is beautiful.



> How does a block quote look?



```typescript
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Date from "../../components/Date";
import { getAllNoteIds, getNoteData } from "../../lib/notes";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierCaveLight,
  atelierLakesideLight,
  codepenEmbed,
  monoBlue,
  nightOwl,
  ocean,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Props = {
  postData: {
    title: string;
    date: string;
    content: string;
  };
  themeMode: string;
};

export default function Note({ postData, themeMode }: Props) {
  function CodeBlock({ language = null, value }) {
    const style = {
      dark: nightOwl,
      gray: ocean,
      rose: atelierCaveLight,
      chocolate: codepenEmbed,
      teal: atelierLakesideLight,
      light: monoBlue,
    };

    return (
      <SyntaxHighlighter language={language} style={style[themeMode]}>
        {value}
      </SyntaxHighlighter>
    );
  }

  const renderers = {
    code: CodeBlock,
  };

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Date dateString={postData.date} />
        <ReactMarkdown renderers={renderers}>{postData.content}</ReactMarkdown>
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
```

what is typewriter mode? Hmm let's see

"using quotes..."



## To Do

- [x] One
- [x] two
- [x] Three





# Links


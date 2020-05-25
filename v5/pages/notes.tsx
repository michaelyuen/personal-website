import React from "react";
// import { GetStaticProps } from "next";
import Head from "next/head";
// import Link from "next/link";
import styled from "styled-components";
// import Date from "../components/Date";
// import { getSortedNotesData } from "../lib/notes";

// type Props = {
//   allNotesData: {
//     date: string;
//     title: string;
//     id: string;
//   }[];
// };

const NotesContainer = styled.section`
  .Notes__description {
    margin-bottom: ${({ theme }) => theme.spacing.gutter};
  }

  .Note {
    a {
      font-weight: bolder;
    }

    h2 {
      margin-bottom: 0;
    }
  }

  hr {
    width: 50%;
  }
`;

// { allNotesData }: Props
export default function Notes() {
  return (
    <NotesContainer className="Notes">
      <Head>
        <title>Notes | Michael Yuen's Personal Website</title>
      </Head>
      <h1>
        <span>my</span>Notes
      </h1>
      <p className="Notes__description">
        Coming soon... I just need to write a bit of logic to filter out notes
        that should not be public.
      </p>
      {/* <p className="Notes__description">
        These are my raw notes since I have begun trying to use the zettelkasten
        approach.
      </p>
      <ul>
        {allNotesData.map(({ id, date, title }) => (
          <React.Fragment key={id}>
            <li className="Note">
              <Link href="/notes/[id]" as={`/notes/${id}`}>
                <a>
                  <h2>{title}</h2>
                </a>
              </Link>
              <small>
                <Date dateString={date} />
              </small>
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul> */}
    </NotesContainer>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allNotesData = getSortedNotesData();
//   return {
//     props: {
//       allNotesData,
//     },
//   };
// };

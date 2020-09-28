import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Date from "../Date";
import CodeBlock from "../CodeBlock";

type Props = {
  className?: string;
  data: {
    content: string;
    date: string;
  };
};

export const NoteContainer = styled.article``;

export default function Note({ className, data: { content, date } }: Props) {
  return (
    <NoteContainer className={className}>
      <Date dateString={date} />
      <ReactMarkdown renderers={{ code: CodeBlock }}>{content}</ReactMarkdown>
    </NoteContainer>
  );
}

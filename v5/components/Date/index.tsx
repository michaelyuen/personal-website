import { parseISO, format } from "date-fns";
import styled from "styled-components";

const DateContainer = styled.time`
  color: ${({ theme }) => theme.colors.midgray};
`;

type Props = {
  dateString: string;
};

export default function Date({ dateString }: Props) {
  const date = parseISO(dateString);
  return (
    <DateContainer dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </DateContainer>
  );
}

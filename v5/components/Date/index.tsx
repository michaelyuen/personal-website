import { parseISO, format } from "date-fns";
import styled from "styled-components";

const DateContainer = styled.time`
  color: ${({ theme }) => theme.colors.midgray};
`;

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <DateContainer dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </DateContainer>
  );
}

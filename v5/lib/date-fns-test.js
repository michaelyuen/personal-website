import { format } from "@goomba/date-fns";

const date = "2020-10-20T04:10:00Z";
const baseDate = "2020-10-19T00:08:29Z";

export function test() {
  const form = format({ date, baseDate, format: "h 'hours'" });
  // const form = format({ date, baseDate });
  return form;
}

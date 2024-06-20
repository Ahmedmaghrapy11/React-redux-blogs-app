import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  console.log(timestamp); // 2024-06-19T03:47:44.351Z

  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp); // Wed Jun 19 2024 06:47:44 GMT+0300 (Eastern European Summer Time)
    const timePeriod = formatDistanceToNow(date); // 10 minutes
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;

import { useEffect, useState } from "react";
import { DateTime } from "luxon";

import Text from "../../../Text";

const Time: React.FC = () => {
  const [time, setTime] = useState(DateTime.now().toFormat("HH:mm"));
  const [date, setDate] = useState(DateTime.now().toFormat("dd.MM.yyyy"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now().toFormat("HH:mm"));
      if (time == "00:00") setDate(DateTime.now().toFormat("dd.MM.yyyy"));
      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <>
      <Text size={"large"}>{time}</Text>
      <Text>{date}</Text>
    </>
  );
};

export default Time;

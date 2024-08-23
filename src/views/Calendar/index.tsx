import React from "react";
import { Badge, Calendar, Card } from "antd";
import type { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
const CalendarSection = () => {
  const data = [
    {
      id: 1,
      content: "Google Meet",
      date: "01/04/2023",
    },
    {
      id: 2,
      content: "New Event",
      date: "22/03/2023",
    },
  ];

  const dateCellRender = (value: Dayjs) => {
    const stringValue = value.format("DD/MM/YYYY");
    const listData = data.filter(({ date }) => date === stringValue);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={"success"} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const monthCellRender = (value: Dayjs) => {
    return value.month() === 8 ? (
      <div className="notes-month">
        <section>8</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return (
    <Card title="Basic Calendar">
      <Calendar 
      cellRender={cellRender} 
      fullscreen
      />
    </Card>
  );
};

export default CalendarSection;

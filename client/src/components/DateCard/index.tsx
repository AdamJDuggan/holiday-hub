// Utils
import displayDate from "../../utils/formatDate.tsx";

type Type = "date" | "fullDate" | "dateTime" | "fullDateTime";

interface DateProps {
  showTime?: boolean;
  showYear?: boolean;
  date: Date;
}

const Date = (props: DateProps) => (
  <div className="text-center">
    <span className="block text-gray-400 font-bold uppercase mb-1">
      {displayDate("day", props.date)}
    </span>
    <span className="block font-semibold">
      {displayDate(props.showYear ? "fullDate" : "date", props.date)}
    </span>
    {props.showTime && (
      <span className="block text-primary font-bold mt-1">
        {displayDate("time", props.date)}
      </span>
    )}
  </div>
);

interface DateCardProps {
  showTime?: boolean;
  showYear?: boolean;
  date: Date;
  endDate?: Date;
}
export default function DataCard(props: DateCardProps) {
  return (
    <div className="p-2 px-3 inline-flex space-x-3 items-center">
      <Date
        showTime={props.showTime}
        showYear={props.showYear}
        date={props.date}
      />
      {props.endDate && (
        <>
          <span className="text-gray-400 font-bold text-lg">-</span>
          <Date
            showTime={props.showTime}
            showYear={props.showYear}
            date={props.endDate}
          />
        </>
      )}
    </div>
  );
}

// 2022-01-01T12:00:00
const formatDateTimeForInput = (date: Date) =>
  new Date(
    new Date(date).getTime() - new Date(date).getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, -1)
    .substring(0, 16);

// 01 Jan
const formatDateForView = (date: any) => {
  return (
    formatDateTimeForInput(date).substring(8, 10) +
    " " +
    new Date(date).toLocaleString("default", { month: "short" })
  );
};

//+
// " " +
// date.getFullYear().toString().substring(2, 4)

const methods = {
  // 11:20
  time: (date: any) =>
    new Date(date).toLocaleString("default", { timeStyle: "short" }),
  // Mon
  day: (date: any) =>
    new Date(date).toLocaleString("default", { weekday: "short" }),
  // 01 Jan
  date: (date: any) => {
    return (
      formatDateTimeForInput(date).substring(8, 10) +
      " " +
      new Date(date).toLocaleString("default", { month: "short" })
    );
  },
  fullDate: (date: any) => {
    return (
      formatDateTimeForInput(date).substring(8, 10) +
      " " +
      new Date(date).toLocaleString("default", { month: "short" }) +
      " " +
      date.getFullYear().toString().substring(2, 4)
    );
  },
};

export default function displayDate(type: string, date: any) {
  const method = methods[type];
  return method(date);
}

// export { formatDateTimeForInput, formatDateForView };

import SurveyOption from "./SurveyOption";

interface SurveyMember {
  id: string;
  name: string;
}

export default interface Survey {
  title: string;
  display: "name" | "date";
  showYear?: boolean;
  showTime?: boolean;
  options: SurveyOption[];
  members: SurveyMember[];
}

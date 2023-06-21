import SurveyOption from "./SurveyOption";
import SurveyOptionModel from "./SurveyOption";

export default interface Survey {
  options: SurveyOption[];
  dateType: "date" | "time" | "dateAndTime";
  members: { id: string; name: string }[];
}

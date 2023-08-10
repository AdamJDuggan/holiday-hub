export default interface SurveyOption {
  id: string;
  title?: string;
  start: Date;
  end: Date;
  description?: string;
  // User ids
  accept: string[];
  // User ids
  decline: string[];
}

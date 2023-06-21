export default interface SurveyOption {
  id: string;
  title?: string;
  start?: Date | undefined;
  end?: Date | undefined;
  description?: string;
  // User ids
  accept: string[];
  // User ids
  decline: string[];
}

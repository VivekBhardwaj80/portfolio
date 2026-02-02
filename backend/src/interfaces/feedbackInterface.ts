export type FeedbackType =
  | "General Feedback"
  | "Suggestion"
  | "Bug / Issue"
  | "Recruitment"
  | "Other";

  export interface IFeedback{
    name?:string,
    email?:string,
    feedbackType:FeedbackType,
    company?:string,
    role?:string,
    message:string,
    isRead?:boolean,
  }

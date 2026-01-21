export type EducationLevel =
  | "10th"
  | "12th"
  | "Diploma"
  | "Graduation"
  | "Post Graduation";
export type EducationInstitute = "School" | "College" | "University";

export interface IEducation {
  level: EducationLevel;
  institution: EducationInstitute;
  fieldOfStudy?: string;
  degree?: string;
  startYear: Date;
  endYear?: Date;
  isCurrent?: boolean;
  grade?: string;   
  description?: string;
  location?: string;
}

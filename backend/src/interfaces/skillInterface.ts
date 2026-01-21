export type skillLevel = "beginner" | "intermediate" | "expert";

export type skillCategory =
  | "frontend"
  | "backend"
  | "language"
  | "tool"
  | "authentication"
  | "api"
  | "realtime"
  | "devops"
  |"animation";

export interface ISkillModel {
    name:string,
    level:skillLevel,
    category:skillCategory,
    icon?:string,
    isFeatured?:boolean,

}

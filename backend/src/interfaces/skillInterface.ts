
export type skillCategory =
  | "frontend"
  | "backend"
  | "language"
  | "tool"
  | "platform"
  | "authentication"
  | "api"
  | "realtime"
  | "devops"
  | "database"
  |"animation";

export interface ISkillModel {
    name:string,
    level:string,
    category:skillCategory,
    icon?:string,
    isFeatured?:boolean,

}

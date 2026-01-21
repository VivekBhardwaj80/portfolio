export type seoPage =
  | "default"
  | "home"
  | "about"
  | "projects"
  | "project-details"
  | "skills"
  | "education"
  | "experience"
  | "feedback";

  export interface ISeo {
    page:seoPage,
    title:string
    description:string
    keyword?:string[]
    ogTitle?:string
    ogDescription?:string
    ogImage:string
}
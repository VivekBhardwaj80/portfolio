interface IExperience{
    company:string,
    role:string,
    startDate:Date,
    endDate?:Date,
    description?:string,
    location?:string,
    isCurrent?:boolean,
    logo?:string
    technologies?:string[]
    working?:string
}

export default IExperience
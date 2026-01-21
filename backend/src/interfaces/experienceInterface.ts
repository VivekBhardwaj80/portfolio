interface IExperience{
    company:string,
    role:string,
    startDate:Date,
    endDate?:Date,
    description?:string,
    location?:string,
    isCurrent?:boolean
}

export default IExperience
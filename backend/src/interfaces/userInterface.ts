interface IUserModel{
    name:string,
    email:string,
    password:string,
    phone?:number | undefined,
}

export default IUserModel
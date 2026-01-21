import IUserModel from "../../interfaces/userInterface";


declare global{
    namespace Express{
        interface Request{
admin?:any
        }
    }
}

export{}
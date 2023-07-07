import { Document, model, Schema } from "mongoose";

interface ILogin extends Document{
    customerID:string;
    customerEmail:string;
    
}

const LoginSchema = new Schema(
    {
        customerID:{
            type:String,
            required:true,
        },
        customerEmail:{
            type:String,
            required:true,
        }
    }
);

export const Login=model<ILogin>("Login",LoginSchema);
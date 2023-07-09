
import { Request, RequestHandler, Response } from "express";
import { Customer } from "../models/Customer";
import { Login } from "../models/Login";


let token="9cfd6bf5b3d09bcc3fa918fcacf5e56405e1eac40d6fe4479775d80eb5ae8e2fc2b300081e038903ef6c677f04bf954c0a189e6cafdf2a013277851ea5c4e2b0"

export default class LoginController{
    loginUser: RequestHandler = async (req: Request, res: Response): Promise<Response> => {

        try{
            const {customerID} =req.body;
            const {customerEmail} =req.body;
            console.log(req.body);  
            
    
            let customer=await Customer.findOne({customerID:customerID}&&{customerEmail:customerEmail});
    
            if(customer){
                
    
                return res.status(200).json({ message: "Login Sucess...!" ,responseData:token});
                
            }else {
                return res.status(200).json({ message: " Wrong Data Entry...." });
              }
              
            } catch (error:unknown) {
                if(error instanceof Error) {
                 return res.status(500).json({message:error.message})
                }else{
                 return res.status(500).json({message:"Unknown error occurred!"})
                }
               }
      
        // return res;
      };
}


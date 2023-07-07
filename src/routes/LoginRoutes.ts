import express, { Router } from "express";
import LoginController from "../controllers/LoginController";


export default class LoginRoutes{
    private router:Router=express.Router();
    private controller:LoginController=new LoginController();

    constructor(){
       this.configRoutes(); 
    }

    private configRoutes=(): void =>{
        this.router.post("/",this.controller.loginUser);
        // this.router.get("/",this.controller.getAllCustomers);
        // this.router.put("/:id",this.controller.updateCustomer);
        // this.router.delete("/:id",this.controller.deleteCustomer);
    };

    public getRouter=() : Router =>{
        return this.router;
    }
        
    
}
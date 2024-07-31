import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService{
     client = new Client();
     account;

     constructor(){
        this.client.setEndpoint(conf.appWriteUrl).setProject(conf.appWriteProjectId)
        this.account = new Account(this.client)
     }

     async createAccount ({email, password, name}){
        try{

        }catch (error){
            throw row
        }

     }
     async login(){

     }
     async getCurrentUser(){

     }
     async logout(){}
}

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const account = new Account(client);
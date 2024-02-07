import conf from "./conf";
import { Client, Databases } from "appwrite";

export class userData {
    client = new Client();
    databases;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        
    }

    async userData({userId,name,email,password,phonenumber}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionIdUser,
                userId,
                {
                    name,
                    email,
                    password,
                    phonenumber
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: inputUserData :: error", error);
        }
    }
}

const inputUserData = new userData()
export default inputUserData
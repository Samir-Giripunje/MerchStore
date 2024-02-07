import conf from './conf';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name,userId}) {
        try {
            
            const userAccount = await this.account.create(userId, email, password, name);
            if (userAccount) {
                // call another method

                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            console.log("Appwrite serive :: createAccount :: error", error)
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            alert("Email or password is wrong")
            console.log("Appwrite serive :: login :: error", error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


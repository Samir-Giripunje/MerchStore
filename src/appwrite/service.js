import conf from './conf';
import { Client, Databases, Storage, Query ,ID} from "appwrite";
    export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    

    //order created


    async createOrder({email,Dressid,quantity,Orderid}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionIdOrders,
                Orderid,
                {
                   email,
                   quantity,
                   Dressid
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

// get orders
// you can only query if you have given the indexes same as the search you are saying
async getOrders(email){
    try {
        const result = await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdOrders,
            [Query.equal('Email', email)]
        );
        return result;
    } catch (error) {
        console.error("Appwrite service :: getOrders :: error", error);
        throw new Error("Failed to fetch orders");
    }
}

//update orders
async updateOrders(Orderid,{email,quantity,Dressid}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdOrders,
            Orderid,
            {
                   email,
                   quantity,
                   Dressid
            }
        )
    } catch (error) {
        console.log("Appwrite serive :: createPost :: error", error);
    }
}

//delete orders
async deleteOrders(Orderid){
    try {
        return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdOrders,
            Orderid   
        )
    } catch (error) {
        console.log("Appwrite serive :: createPost :: error", error);
    }
}
	
//upload file 
async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite serive :: uploadFile :: error", error);
        return false
    }
}

// delete file

async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite serive :: deleteFile :: error", error);
        return false
    }
}

//preview
getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}

//get file
getFile(fileId){
    return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    )
}

}

const service = new Service()
export default service
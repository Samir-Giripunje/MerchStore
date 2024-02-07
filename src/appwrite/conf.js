const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionIdOrders: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_ORDERS),
    appwriteCollectionIdDress: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_DRESS),
    appwriteCollectionIdUser: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_USER),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf
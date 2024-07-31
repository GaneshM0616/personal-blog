import conf from "../conf/conf";

import {Client, Databases} from "appwrite"


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getPost(slug){
        try {
            this.databases.getDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug)
        } catch (error) {
            console.log("getPost()::", error)
            return false;
        }

    }

}

const client = new Client();
const databases = new Databases(client);

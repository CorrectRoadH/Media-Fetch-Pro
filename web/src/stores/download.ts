import { defineStore } from "pinia";
import axios from "axios";

export const useDownloadStore = defineStore("download", {
    state: () => ({
        url: "",
        // selectStoragePath: "/var/opt/video",
        // selectStoragePath: "/Users/ctrdh/video",
        StoragePathOptions: [],
    }),
    getters: {
    },    
    actions:{
        async download(storagePath: string) {
            axios.post("api/video", {
                url: this.url,
                storage: storagePath,
            })
        },
    },
});
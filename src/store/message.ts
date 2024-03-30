import { defineStore } from "pinia";
import { ref } from "vue";




interface Message {
    _id: string;
    content: string;
    sender: string;
    receiver: string;
    date: Date;
}



export const messageStore = defineStore('message', () => {
    const messages = ref<Message[]>([])
// how to get id in locastorage
  


    return {
        messages
    }
})
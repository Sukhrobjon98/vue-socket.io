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
    const id = JSON.parse(localStorage.getItem('username') || '{}')._id
    let receiver = ref('')

    let message = ref<Message>()




    return {
        messages,
        id,
        receiver,
        message
    }
})
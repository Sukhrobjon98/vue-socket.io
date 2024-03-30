<template>
    <div class="message-input">
        <input type="text" placeholder="Type a message" v-model="content" />
        <button @click="sendMessage">Send</button>
    </div>
</template>
<script lang="ts" setup>
import { messageStore } from "../store/message";
import { useSocketStore } from "../store/socket";
import { ref, onMounted } from "vue";
let content = ref();
let userSocket = useSocketStore();
let message = messageStore();

function sendMessage() {
    if (content.value.trim() !== "") {
        userSocket.useSocketEmit(
            "sendMessage",
            {
                content: content.value,
                receiver: message.receiver,
                sender: message.id,
            },
            (data: any) => {
                message.messages.push(data);
            }
        );

        content.value = "";
    }
}

onMounted(() => {
    userSocket.useSocketOn("newMessage", (data: any) => {
        console.log("on", data);

        message.messages.push(data);
    });
});
</script>
<style scoped>
.message-input {
    display: flex;
    padding: 0.5rem;
    border-top: 2px solid #e0e0e0;
    justify-content: center;
    align-items: center;
}

input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.7rem;
    height: 1rem;
    font-family: inherit;
    font-size: 1.2rem;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-family: inherit;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #0056b3;
}

button:active {
    background-color: #004499;
}
</style>

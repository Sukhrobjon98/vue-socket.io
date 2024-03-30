<template>
    <div class="message-list">
        <div v-for="message in formattedMessages" :key="message._id" :class="getMessageClass(message.sender)">
            <div class="message-content">
                {{ message.content }}
            </div>
            <div class="message-date">{{ formatDate(message.date) }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { messageStore } from "../store/message";
import { computed } from "vue";
// import { useSocketStore } from "../store/socket";

const messages = messageStore();
// const userSocket = useSocketStore();

// Function to determine the CSS class for each message based on the sender ID
function getMessageClass(senderId: string) {
    return senderId === messages.receiver ? "message-left" : "message-right";
}

// Function to format the message timestamp
const formatDate = (timestamp: Date) => {
    // get the date 11:30:20 AM
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
};






// Use computed property to access messages
const formattedMessages = computed(() => messages.messages);
</script>

<style scoped>
.message-list {
    padding: 0.2rem;
    width: 90%;
    margin: 0 auto;
}

.message {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
}

.message-left {
    align-self: flex-start;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-right: 50%;
    margin-left: 0;
    margin-bottom: 0.5rem;
    max-width: 70%;
    word-wrap: break-word;
}

.message-right {
    align-self: flex-end;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-left: 50%;
    margin-right: 0;
    margin-bottom: 0.5rem;
    max-width: 70%;
    word-wrap: break-word;
}

.message-content {
    padding: 0.5rem;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
}

.message-date {
    font-size: 0.8rem;
    color: #777;
    align-self: flex-end;
}
</style>

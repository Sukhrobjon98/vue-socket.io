<template>
    <div class="message-list">
        <div v-for="message in formattedMessages" :key="message._id" :class="getMessageClass(message.senderId)">
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

const messages = messageStore();

// Function to determine the CSS class for each message based on the sender ID
function getMessageClass(senderId: string) {
return senderId === "user1" ? "message-left" : "message-right";
}

// Function to format the message timestamp
const formatDate = (timestamp: Date) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust formatting as needed
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
}

.message-right {
    align-self: flex-end;
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

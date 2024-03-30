<template>
    <div class="window">
        <div class="header">
            <ChatHeader />
        </div>
        <div class="message-list">
            <MessageList />
        </div>
        <div class="message-input">
            <MessageInput />
        </div>
    </div>
</template>
<script lang="ts" setup>
import ChatHeader from "./ChatHeader.vue";
import MessageList from "./MessageList.vue";
import MessageInput from "./MessageInput.vue";
</script>
<style scoped>
.window {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.header {
    padding: 0.5rem;
}

.message-list {
    flex: 1;
    overflow-y: auto;
    padding: 0.5rem;
}

.message-input {
    padding: 0.5rem;
}
</style>

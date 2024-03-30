<template>
    <div class="chat-header">
        <span class="image"></span>
        <h2>John Doe</h2>
    </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.chat-header {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
}
.image {
    width: 50px;
    height: 50px;
    background-color: #e0e0e0;
    border-radius: 50%;
    margin-right: 1rem;
}

h2 {
    margin: 0;
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
}
</style>

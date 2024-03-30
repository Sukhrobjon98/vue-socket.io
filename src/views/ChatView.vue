<template>
    <div class="layout">
        <section>
            <UserList />
        </section>
        <main>
            <ChatWindow />
        </main>
    </div>
</template>
<script lang="ts" setup>
import UserList from "../components/UserList.vue";
import ChatWindow from "../components/ChatWindow.vue";
</script>
<style scoped>
.layout {
    display: flex;
    height: 75vh;
    width: 65vw;
    /* gap: 2px; */
}
main {
    flex: 1;
    background-color: white;
    box-shadow: 0 0 10px rgba(10, 8, 8, 0.1);
    border-radius: 5px;
}
section {
    width: 30%;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 1rem;
    overflow-y: scroll;
}
</style>

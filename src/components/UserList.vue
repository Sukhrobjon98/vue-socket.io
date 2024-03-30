<template>
    <div class="search">
        <SearchInput />
    </div>
    <div class="user-list">
        <ul class="user-list-group">
            <li v-for="user in userLists" :key="user._id" @click="getReceiverId(user._id)">
                <div class="head">
                    <span class="image-box"></span>
                    <span>{{ user.username }}</span>
                </div>
                <div class="status">
                    <span v-if="user.status">Online</span>
                    <span v-else>Offline</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import SearchInput from "./SearchInput.vue";
import { onBeforeMount, onMounted, ref } from "vue";
// import router from "../router/router";
import { useSocketStore } from "../store/socket";
import { messageStore } from "../store/message";

let messages = messageStore();

let useSocket = useSocketStore();

function getReceiverId(receiverId: string) {
    messages.receiver = receiverId;
    useSocket.useSocketEmit("getMessages", { receiver: receiverId, sender: messages.id }, (data: any) => {
        console.log(data);
        messages.messages = data;
    });
}

interface User {
    _id: string;
    username: string;
    status: boolean;
}
let userLists = ref<User[]>([]);

onMounted(() => {
    useSocket.useSocketOn("userDisconnected", (data: any) => {
        console.log(data);

        userLists.value = userLists.value.map((user) => {
            if (user._id == data) {
                user.status = false;
            }
            return user;
        });
    });

    useSocket.useSocketOn("userConnected", (data: any) => {
        console.log(data);

        userLists.value = userLists.value.map((user) => {
            if (user._id == data) {
                user.status = true;
            }
            return user;
        });
    });
});
onBeforeMount(() => {
    useSocket.useSocketEmit("getUserFriends", {}, (data: any) => {
        userLists.value = data.friends as User[];
    });
});
</script>
<style scoped>
.head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 1rem;
}

.user-list {
    padding: 0.2 rem;
    width: 90%;
    margin: 0 auto;
}

.user-list :hover {
    cursor: pointer;
}

.user-list-group {
    list-style-type: none;
    padding: 0;
}

.user-list-group li {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
    justify-content: space-between;
}

.image-box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #e0e0e0;
    margin-right: 1rem;
}

.user-list-group li:last-child {
    border-bottom: none;
}
</style>

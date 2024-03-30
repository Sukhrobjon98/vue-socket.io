<template>
    <div class="login-page">
        <h1>Login</h1>
        <div class="form">
            <input type="text" placeholder="Username" v-model="username" />
            <input type="password" placeholder="Password" v-model="password" />
            <button type="submit" @click="login">Login</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import router from "../router/router";
import { useSocketStore } from "../store/socket";
let username = ref("");
let password = ref("");

let useSocket = useSocketStore();

let login = () => {
    useSocket.useSocketEmit("login", { username: username.value, password: password.value }, (data: any) => {
        console.log(data);

        if (data.status === 401) {
            alert(data.message);
        }
        if (data.status === 200) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", JSON.stringify(data.user));
            router.push("/");
        }
    });
};
</script>
<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 1rem;
    width: 30vw;
    margin: 0 auto;
    margin-top: 10vh;
    border-radius: 10px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 70%;
    margin-bottom: 1rem;
    align-items: center;
}

input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
    height: 2rem;
}

button {
    padding: 0.8rem;
    border: none;
    border-radius: 10px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    width: 100%;
    height: 3rem;
    font-family: inherit;
    font-size: 1.5rem;
}

button:hover {
    background-color: #0056b3;
}
</style>
../store/socket.ts

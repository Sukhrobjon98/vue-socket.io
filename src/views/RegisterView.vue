<template>
    <div class="register">
        <div class="form-group">
            <h2>Register</h2>
            <input type="text" id="username" v-model="username" placeholder="Username" />

            <input type="password" id="password" placeholder="Password" v-model="password" />
            <button type="submit" @click="submit">Register</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
let username = ref("");
let password = ref("");
import { useSocketStore } from "../store/socket";
import router from "../router/router";
let useSocket = useSocketStore();

let submit = () => {
    useSocket.useSocketEmit("register", { username: username.value, password: password.value }, (res: any) => {
        if (res.status == 400) {
            alert("Username already exists");
        } else {
            localStorage.setItem("token", res.token);
            router.push("/");
            alert("Registered successfully");
        }
    });
};
</script>
<style scoped>
.register {
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

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 70%;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: inherit;
    color: #333;
    font-weight: 500;
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

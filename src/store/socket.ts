// import { onBeforeMount } from "vue";
import { defineStore } from "pinia";
import { io } from 'socket.io-client';
import router from "../router/router";



export const useSocketStore = defineStore('socket', () => {



    let socket = io('http://0.tcp.in.ngrok.io:13126', {
        extraHeaders: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    });

    function useSocketEmit(event: string, payload: any, callback: any) {
        let token = localStorage.getItem('token');
        if (!token) {
            router.push({ name: 'login' });

        }
        if (socket) {
            socket.emit(event, payload || {}, (response: any) => {
                if (response.status == 401) {
                    alert(response.message)
                    router.push({ name: 'login' })
                } else {
                    callback(response);
                }
            });
            // handleErrors();
        } else {
            console.error('Socket is not connected');
        }
    }
    function handleErrors() {
        socket.on('error', (error: any) => {
            if (error.status == 401) {
                alert(error.message)
                router.push({ name: 'login' })
            }
        }
        )
    }

    function useSocketOn(event: string, callback: any) {
        if (socket) {
            socket.on(event, (response: any) => {
                callback(response);
            });
        } else {
            console.error('Socket is not connected');
        }
    }


    return {
        useSocketEmit,
        handleErrors,
        useSocketOn
    }
})
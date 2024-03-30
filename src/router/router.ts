import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ChatView from '../views/ChatView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ChatView,name:'chat' },
        { path: '/login', component: LoginView ,name:'login'},
        { path: '/register', component: RegisterView }
    ],
});


export default router;

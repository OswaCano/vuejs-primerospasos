import { createRouter, createWebHistory } from 'vue-router';
import Register from '@/registro/views/Register.vue';
import ToDoList from "@/toDoList/components/toDoList.vue";
import Login from "@/views/Login.vue";

const routes = [
    { path: '/register', component: Register },  // Ruta para el registro
    { path: '/tasks', component: ToDoList },
    { path: '/login', component: Login },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
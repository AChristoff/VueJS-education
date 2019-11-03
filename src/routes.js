import Home from './components/Home.vue';
import Form from './components/Form.vue';
import ConfirmMessage from "./components/ConfirmMessage.vue";

export const routes = [
    {path: '', component: Home},
    {path: '/contacts', component: Form},
    {path: '/message', component: ConfirmMessage},
];

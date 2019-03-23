import { Main } from "../Components/Main";
import { Posts } from "../Components/Posts";
import { Users } from "../Components/Users";

export const routes = [
    {
        path: '',
        component: Main
    },
    {
        path: 'users',
        component: Users
    },
    {
        path: 'posts/posts/posts',
        component: Posts
    },
    {
        path: 'posts/:id',
        component: User
    },

];
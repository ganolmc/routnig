import { Main } from "../Components/Main";
import { NotFound } from "../Components/NotFound";
import Users from "../Components/Users/Users";
import User from "../Components/User/User";
import Login from "../Components/Login/Login";
import Posts from "../Components/Posts/Posts";
import { isLogged } from "../guards/guards";


export const routes = [{
        path: '',
        component: Main
    },
    {
        path: 'users',
        component: Users,
    },
    {
        path: 'user/:id',
        component: User
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'posts',
        component: Posts,
        guards: [isLogged]
    },
    {
        path: '**',
        component: NotFound
    }
];
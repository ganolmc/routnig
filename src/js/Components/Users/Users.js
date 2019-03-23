import Component from "../../framework/Component";
import { getData } from "../../api/api";

export default class Users extends Component {

    constructor(host, props) {
        super(host, props);
        this.getUsers();
    }

    getUsers() {
        getData('users').then(res => {
            this.updateState({users: res});
        }).catch(err => {
            this.error = err;
            this.render();
        });
    }

    render() {
        if(!this.state) {
            return [
                {
                    tag: 'p',
                    content: 'Loading....'
                }
             ]   
        } else {
           return this.state.users.map(user => {
               return {
                   tag: 'p',
                   children: [
                       {
                            tag: 'a',
                            attributes: [
                                {
                                   name: 'href',
                                   value: `#/user/${user.id}`
                               }
                            ],
                            content: user.name
                        }
                   ]
               }
           });
        }

    }
}
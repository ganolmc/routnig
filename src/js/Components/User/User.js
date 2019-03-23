import Component from "../../framework/Component";
import { getData } from "../../api/api";

export default class User extends Component {

    constructor(host, props) {
        super(host, props);
        this.userId = props.id;
        this.getUser();
    }

    getUser() {
        getData(`users/${this.userId}`).then(res => {
            this.updateState({user: res});
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
            const { user } = this.state;
            return [
                {
                    tag: 'p',
                    content: user.name
                },
                {
                    tag: 'p',
                    content: user.phone
                },
                {
                    tag: 'p',
                    content: user.email
                },
                {
                    tag: 'p',
                    content: user.website
                }
            ]
        }

    }
}
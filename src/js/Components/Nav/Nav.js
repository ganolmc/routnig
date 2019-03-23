import Component from "../../framework/Component";

export default class Nav extends Component {

    constructor(host, props) {
        super(host, props);
    }
    
    render() {
        return [
            {
                tag: 'a',
                attributes: [
                    {
                        name: 'href',
                        value: '#/users'
                    },
                ],
                content: 'Users'
            },
            {
                tag: 'a',
                attributes: [
                    {
                        name: 'href',
                        value: '#/posts'
                    },
                ],
                content: 'Posts'
            },
            {
                tag: 'a',
                attributes: [
                    {
                        name: 'href',
                        value: '#/login'
                    },
                ],
                content: 'Login'
            },
        ]
    }
}
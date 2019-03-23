
export default class Router {

    constructor(host, routes, App) {
        this.host = host;
        this.routes = routes;
        this.app = new App(host);
        window.addEventListener('hashchange', this.handleUrlChange.bind(this));
    }

    init() {
        
    }

    handleUrlChange() {
        const browserUrlArr = location.hash.split('/').slice(1);
        this.findRoute(browserUrlArr);
    }

    findRoute(browserUrlArr) {

    }
}

export default class Router {

    constructor(host, routes, App) {
        this.host = host;
        this.routes = routes;
        this.routerOutlet = document.createElement('div');
        this.app = new App(host, {
            routerOutlet: this.routerOutlet
        });
        window.addEventListener('hashchange', this.handleUrlChange.bind(this));
    }

    init() {
        this.handleUrlChange();
    }

    handleUrlChange() {
        if(!location.hash) {
            location.assign(`/#${location.pathname}`);
        } else {
            const browserUrlArr = location.hash.split('/').slice(1);
            this.findRoute(browserUrlArr);
        }
    }

    findRoute(browserUrlArr) {
        const foundedRoute = this.routes.find(route => this.isUrlEqualRoute(browserUrlArr, route));
        if (foundedRoute) {
            this.renderNewComponent(foundedRoute);
        }
    }   

    isUrlEqualRoute(browserUrlArr, route) {
        const routePathArr = route.path.split('/');
        return browserUrlArr.every((urlPart, i) => {
            const isRoutePathEqualBrowserUrl = routePathArr[i] === urlPart;
            return isRoutePathEqualBrowserUrl;
        });       
    }

    renderNewComponent(route) {
        const newComponent = new route.component(this.routerOutlet);
        // newComponent.init();
    }
}
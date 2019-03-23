
export default class Router {

    constructor(host, routes, App) {
        this.host = host;
        this.routes = routes;
        this.routerOutlet = document.createElement('div');
        this.app = new App(host, {
            routerOutlet: this.routerOutlet
        });
        this.notFound = this.routes.find(route => route.path === '**')
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
        if (!foundedRoute) {
            this.renderNewComponent(this.notFound);
        } else {
            const params = this.getParamsFromUrl(foundedRoute.path, browserUrlArr);
            this.renderNewComponent(foundedRoute, params);
        }
    }

    getParamsFromUrl(routePath, browserUrlArr) {
        const routePathArr = routePath.split('/');
        const isEmptyPath = browserUrlArr.length === 1;
        if (isEmptyPath) {
            return;
        }
        return routePathArr.reduce((acc, pathPart, i) => {
            if (pathPart !== browserUrlArr[i]) {
                acc[pathPart.slice(1)] = browserUrlArr[i];
            }
            return acc;
        }, {});
    }

    isUrlEqualRoute(browserUrlArr, route) {
        const routePathArr = route.path.split('/');
        return browserUrlArr.every((urlPart, i) => {
            const isRoutePathEqualBrowserUrl = routePathArr[i] === urlPart;
            const isRouteArrPartContainsParam = routePathArr[i].startsWith(':');
            return isRoutePathEqualBrowserUrl || isRouteArrPartContainsParam;
        });       
    }

    checkGuards(guards) {
        return guards.every(guard => {
           return guard();
        });
    }

    renderNewComponent(route, params) {
        if (route.guards) {
            const isPassed = this.checkGuards(route.guards);
            if (!isPassed) {
                return;
            }
        }
        const newComponent = new route.component(this.routerOutlet, params);
    }    
}
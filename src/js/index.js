import { routes } from './routes/routes';
import Router from './framework/Router'
import { App } from './Components/App';

const router = new Router(document.getElementById('app'), routes, App)
router.init();

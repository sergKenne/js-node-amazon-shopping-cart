import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen';
import parseRequestUrl from './utils';
import Error404Screen from './screens/Error404Screen';

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
  '/cart/:id' : CartScreen,
  '/cart': CartScreen
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
  await screen.cart_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const root = document.querySelector('#app');

function initialLayout() {
    root.innerHTML = `
        ${Header()}
        <main class="main"></main>
        ${Footer()}
    `;
}

function router() {
    const path = window.location.pathname;
    const main = document.querySelector('.main');

    main.innerHTML = `<h1>${path}</h1>`;
}

initialLayout();
router();

window.addEventListener('popstate', router);

document.body.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-link]');

    if (link) {
        event.preventDefault();

        history.pushState({}, "", link.href);
        router();
    }
});
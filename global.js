import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';

// NAV BAR

let pages = [
    { url: '', title: 'Conf Prob'},

]

const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? "/"                  // Local server
    : "/ucsd-softball-prob/";         // GitHub Pages repo name

let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;

    if (!url.startsWith('http')) {
        url = BASE_PATH + url;
    };

    let a = document.createElement('a');
    a.href = url;
    a.textContent = title;
    nav.append(a);

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add('current');
    };

    if (a.host !== location.host) {
        a.target = "_blank";
    };

};
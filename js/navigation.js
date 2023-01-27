const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const date =  new Date();
const year = date.getFullYear();

const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last modified: ${document.lastModified}`;

const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"}).format(today);

document.getElementById('currentDate').innerHTML = `<em>${fulldate}</em>`;

document.getElementById('currentYear').textContent = year;
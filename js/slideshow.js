
const imagens = [
    {'id':'1','url':'./img/chrono.jpj'}, 
    {'id':'2','url':'./img/inuyasha.jpg'},
    {'id':'3','url':'./img/ippo.png'},
    {'id':'4','url':'./img/tenchi.jpg'},
    {'id':'5','url':'./img/tenjhotenge.jpg'},
    {'id':'6','url':'./img/yuyuhakusho.jpg'}
];

const containerItens = document.querySelector('#container-slide');

const loadImages = (images,container) =>{
    images.forEach(images => {

        container.innerHtml +=
        `<div class='item'>
        <img src='${images.url}'
        </div>`
    });
};

loadImages(images,containerItens);

let items = document.querySelectorAll('.item');

const anterior = () => {
    containerItens.appendChild(items[0]);
    items = document.querySelectorAll('.item');
};

const proximo () => {
const lastItem  = items[items.length - 1];
containerItens.insertBefore(lastItem,items[0]);
items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click',anterior);
document.querySelector('#next").addEventListener('click',proximo);


// código correto do professor abaixo


const images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./img/ippo.png' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const anterior = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
};

const proximo = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', anterior);
document.querySelector('#next').addEventListener('click', proximo);

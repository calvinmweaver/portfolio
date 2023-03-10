let imagestoLoad = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target)
            }
        });
    }, imageOptions);  

    imagestoLoad.forEach((img) => {
        imgObserver.observe(img);
    })
}
else {
    imagestoLoad.forEach((img) => {
        loadImages(img);
    })
}
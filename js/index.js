const preloader = document.getElementById('preloader'),
      images = document.querySelectorAll('img'),
      options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      },
      observer = new IntersectionObserver(handleImg, options);

window.onload = function () {
    window.setTimeout(function () {
        preloader.style.display = 'none';
    }, 1000);
}

function handleImg(myImg, observer) {
    myImg.forEach(imgSingle => {
        console.log(imgSingle.intersectionRatio)
        if (imgSingle.intersectionRatio > 0) {
            loadImg(imgSingle.target)
        }
    })
}

function loadImg(img) {
    img.src = img.getAttribute('data');
}

images.forEach(img => {
    observer.observe(img)
})


let i = 0;

const image = [];

image[0] = '../assets/reading.jpg';
image[1] = '../assets/laptop-book.jpg';
image[2] = '../assets/floating.jpeg';
image[3] = '../assets/web-option.jpg';

console.log(image[0]);

const sliderHandler = () => {
    document.slider.src = image[i];

    if( i < image.length - 1 ){
        i++
    }else{
        i = 0;
    }

    setTimeout("sliderHandler()", 10000)
}

window.onload(sliderHandler());


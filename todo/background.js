const background = document.querySelector('#background');

let backgroundImg = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg'
]

const randomBg = backgroundImg[Math.floor(Math.random() * backgroundImg.length)];
background.style.backgroundImage = `url(${randomBg})`
background.style.backgroundSize = 'cover';

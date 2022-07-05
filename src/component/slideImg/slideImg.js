import MuiImageSlider from 'mui-image-slider';

const images = [
    'https://i.imgur.com/LtgoVe5.jpg',
    'https://i.imgur.com/QhFdFKv.jpg',
    'https://i.imgur.com/oVLSHuS.jpg',
];

export function slideImg() {
  return (
    <MuiImageSlider images={images}/>
  )
}
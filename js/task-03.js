const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector('.gallery');
const galleryList = images.map((item) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.classList.add('photo');
  img.style.width = '250px';
  img.setAttribute('src', item.url);
  img.setAttribute('alt', item.alt);
  li.append(img);
  return li;
});
galleryRef.append(...galleryList);
galleryRef.style.display = 'flex';
galleryRef.style.justifyContent = 'space-between';

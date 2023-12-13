
const photosContainer = document.getElementById('photos');

window.addEventListener('load', updatePhotos);
window.addEventListener('resize', updatePhotos);

function updatePhotos() {
 const imageUrls = Array.from({ length: 12 }, (_, i) => {
    return `https://source.unsplash.com/random/300x300?random=${i}`;
 });

 while (photosContainer.firstChild) {
    photosContainer.firstChild.remove();
 }

 imageUrls.forEach(url => {
    const newImage = document.createElement('img');
    newImage.src = url;
    newImage.alt = 'Random photo';

    const newPhotoDiv = document.createElement('div');
    newPhotoDiv.className = 'photo';
    newPhotoDiv.appendChild(newImage);

    photosContainer.appendChild(newPhotoDiv);
 });
}
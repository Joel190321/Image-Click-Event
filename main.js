document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const thumbnails = document.querySelectorAll('.thumbnail');

    mainImage.addEventListener('click', () => {
        thumbnailContainer.style.display = 'flex';
    });

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
            thumbnailContainer.style.display = 'none';
        });
    });
});
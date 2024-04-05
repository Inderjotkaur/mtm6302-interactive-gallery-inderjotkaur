// Sample image data (you can replace this with your own)
const images = [
    { src: '1.jpeg', alt: 'Car 1', hdSrc: '1.jpeg', caption: 'Sleek design, powerful performance.' },
    { src: '2.jpeg', alt: 'Car 2', hdSrc: '2.jpeg', caption: 'Luxury redefined, every detail considered.' },
    { src: '3.jpeg', alt: 'Car 3', hdSrc: '3.jpeg', caption: 'Unmatched comfort and innovation.' },
    { src: '4.jpeg', alt: 'Car 4', hdSrc: '4.jpeg', caption: 'Efficiency meets elegance.' },
    { src: '5.jpeg', alt: 'Car 5', hdSrc: '5.jpeg', caption: 'Innovative technology, superior driving experience.' },
    { src: '6.jpeg', alt: 'Car 6', hdSrc: '6.jpeg', caption: 'Performance that sets the standard.' },
    { src: '7.jpeg', alt: 'Car 7', hdSrc: '7.jpeg', caption: 'Iconic design, timeless appeal.' },
    { src: '8.jpg', alt: 'Car 8', hdSrc: '8.jpg', caption: 'Craftsmanship redefined, luxury elevated.' },
    { src: '9.jpeg', alt: 'Car 9', hdSrc: '9.jpeg', caption: 'A perfect blend of style and substance.' },
    { src: '10.jpeg', alt: 'Car 10', hdSrc: '10.jpeg', caption: 'Adventure awaits, wherever the road leads.' },
    { src: '11.jpeg', alt: 'Car 11', hdSrc: '11.jpeg', caption: 'Dynamic performance, unmatched reliability.' },
    { src: '12.jpg', alt: 'Car 12', hdSrc: '12.jpg', caption: 'Driving pleasure, redefined.' },
    { src: '13.jpeg', alt: 'Car 13', hdSrc: '13.jpeg', caption: 'Safety first, without compromising on style.' },
    { src: '14.jpeg', alt: 'Car 14', hdSrc: '14.jpeg', caption: 'Effortless style, uncompromising performance.' },
    { src: '15.jpeg', alt: 'Car 15', hdSrc: '15.jpeg', caption: 'Innovation that moves you.' },
    { src: '16.jpeg', alt: 'Car 16', hdSrc: '16.jpeg', caption: 'Every journey, an unforgettable experience.' },
    { src: '17.jpeg', alt: 'Car 17', hdSrc: '17.jpeg', caption: 'Elegance meets excitement on the open road.' },
    { src: '18.jpeg', alt: 'Car 18', hdSrc: '18.jpge', caption: 'Where luxury meets performance.' },
    { src: '19.jpg', alt: 'Car 19', hdSrc: '19.jpg', caption: 'Designed to inspire, engineered to exhilarate.' },
    { src: '1.jpeg', alt: 'Car 20', hdSrc: '1.jpeg', caption: 'Luxury without compromise.' },
    { src: '2.jpeg', alt: 'Car 21', hdSrc: '2.jpeg', caption: 'A new standard of elegance.' },
    { src: '3.jpeg', alt: 'Car 22', hdSrc: '3.jpeg', caption: 'Performance that thrills, design that captivates.' },
];

// Function to create and add image elements to the gallery
function createGallery(images) {
    const gallery = document.getElementById('gallery');

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        gallery.appendChild(img);
    });

    // Add event listener to gallery for event delegation
    gallery.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const index = Array.from(gallery.children).indexOf(event.target);
            openOverlay(images[index]);
        }
    });
}

// Function to open overlay with HD image and caption
function openOverlay(image) {
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlay-content');

    const imgElement = document.createElement('img');
    imgElement.src = image.hdSrc;
    imgElement.alt = image.alt;

    const captionElement = document.createElement('p');
    captionElement.textContent = image.caption;

    overlayContent.innerHTML = '';
    overlayContent.appendChild(imgElement);
    overlayContent.appendChild(captionElement);

    overlay.style.display = 'block';

    // Add event listener to hide overlay on overlay click
    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
}

// Initialize gallery
createGallery(images);

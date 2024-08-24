function updateImageSource() {
    const img = document.getElementById('responsive-image');
    if (window.innerWidth >= 768) {
        img.src = 'assets/images/DesktopRatio.jpg';
    } else if (window.innerWidth >= 590 && window.innerWidth < 768) {
        img.src = 'assets/images/TabletRatio.jpg';
    } else {
        img.src = 'assets/images/MobileRatio.jpg';
    }}

// Initial check
updateImageSource();

// Update image source on resize
window.addEventListener('resize', updateImageSource);

function updateImageSource() {
  const img = document.getElementById("responsive-image");

  if (window.innerWidth >= 768) {
    img.src = "assets/images/DesktopRatio.jpg";
  } else if (window.innerWidth >= 590 && window.innerWidth < 768) {
    img.src = "assets/images//Webp images/TabletRatio.webp";
  } else {
    img.src = "assets/images/Webp images/MobileRatio.webp";
  }
}

// Initial check on page load
updateImageSource();

// Update image source on window resize
window.addEventListener("resize", updateImageSource);

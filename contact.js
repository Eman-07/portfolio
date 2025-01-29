


alert("⚠️⚠️⚠️This Website is not Optimized Dynamically,So kindly adjust your view scale to 80%\nTo adjust scale press CTRL - or ctrl + \nIt will be optimized soon\nSorry For Inconvenience😕\n");


// Select the image element
const image = document.getElementsByClassName('zoomableImage')

// Add event listeners for mouse hover
image.addEventListener('mouseenter', zoomIn);
image.addEventListener('mouseleave', zoomOut);

// Function to zoom in on mouse hover
function zoomIn() {
    image.style.transform = 'scale(1.2)'; // Increase scale for zoom effect
}

// Function to zoom out when mouse leaves
function zoomOut() {
    image.style.transform = 'scale(1)'; // Reset scale to normal
}



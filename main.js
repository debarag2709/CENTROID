// Initialize and add the map
function initMap() {
  // Your Location
  const loc={ lat:23.835367, lng: 91.271000};
  // Centered Map on Location
  const map= new google.maps.Map(document.querySelector('.map'),
  {
    zoom:16,
    center: loc
  });
  // The Marker,positioned at location
  const marker= new google.maps.Marker({ position: loc, map: map});
}

// Results
const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
document.getElementById('places-searching').addEventListener('click', event => {
  event.preventDefault();
  let restauranteName = document.getElementById('').value;
  let restaurantType = document.getElementById('').value;
  FilterPlacesSearching(restaurantType, restauranteName);
});
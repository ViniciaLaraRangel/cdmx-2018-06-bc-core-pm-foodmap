document.getElementById('places-searching').addEventListener('click', event => {
  event.preventDefault();
  let restauranteName = document.getElementById('restauranteName').value;
  if (restauranteName !== '' && restauranteName !== ' ') {
    FilterPlacesSearching(restauranteName);
  };
});

/* let restaurantType = document.getElementById('').value;*/
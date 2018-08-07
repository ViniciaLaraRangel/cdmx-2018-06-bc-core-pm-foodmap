// Initialize Firebase
let config = {
  apiKey: 'AIzaSyCiLDBi-b0s3qQ7StQwIpepNwyEX65LHyo',
  authDomain: 'affamato-project.firebaseapp.com',
  databaseURL: 'https://affamato-project.firebaseio.com',
  projectId: 'affamato-project',
  storageBucket: 'affamato-project.appspot.com',
  messagingSenderId: '371498322149'
};
firebase.initializeApp(config);

let db = firebase.firestore();

window.FilterPlacesSearching = (restauranteName) => {
  filterPlaceByName = '';
  db.collection('places').get()
    .then(result => {
      result.forEach(allTypes => {
        // console.log(allTypes.data());
        let placesName = allTypes.data().name;
        console.log(placesName);
        let rankingPlaces = printRatingAllPlaces(allTypes.data().rate);
        let allTypesName = placesName.indexOf(restauranteName);
        if (allTypesName !== -1) {
          filterPlaceByName = `<div class="col-sm-5 my-2 mx-2">
                <div class="card ">
                  <div class="box">
                      <div class="img">
                          <img src="${allTypes.data().url}" class="img-fluid img-fluid-places">
                      </div>
                      <h2>${allTypes.data().name}
                          <br>
                          <span class="restaurant-type">${allTypes.data().type}</span>
                      </h2>
                      <p>
                      ${rankingPlaces}
                      </p>
                      <span>
                          <ul>
                              <li>
                                  <button class="btn btn-color" type="button">
                                      <i class="fas fa-map-marked-alt"></i>
                                  </button>
                              </li>
                          </ul>
                      </span>
                  </div>
              </div>
          </div>`;
          document.getElementById('places-searching').innerHTML = filterPlaceByName;
        } else {
          // alert('No se encontraron coincidencias');
          console.log('NOOOO');
        }
      });
    });
};

window.printRatingAllPlaces = (printRanking) => {
  starRate = '';
  if (printRanking === 'Excelente') {
    starRate += `<i class="fa fa-star"></i>
    <i class="fa fa-star"></i> 
    <i class="fa fa-star"></i> 
    <i class="fa fa-star"></i> 
    <i class="fa fa-star"></i>`;
  } if (printRanking === 'Bueno') {
    starRate += `<i class="fa fa-star"></i>
    <i class="fa fa-star"></i> 
    <i class="fa fa-star"></i> 
    <i class="fa fa-star"></i>`;
  } else {
    starRate += `<i class="fa fa-star"></i>
    <i class="fa fa-star"></i>`;
  }
  return starRate;
};


window.obtainRestaurantPlaces = () => {
  resultAllPlaces = '';
  db.collection('places').orderBy('rate', 'asc').get()
    .then(result => {
      result.forEach(allPlaces => {
        // console.log(allPlaces.data().name);
        let rankingPlaces = printRatingAllPlaces(allPlaces.data().rate);
        resultAllPlaces += `<div class="col-sm-5 my-2 mx-2">
        <div class="card ">
            <div class="box">
                <div class="img">
                    <img src="${allPlaces.data().url}" class="img-fluid img-fluid-places">
                </div>
                <h2>${allPlaces.data().name}
                    <br>
                    <span class="restaurant-type">${allPlaces.data().type}</span>
                </h2>
                <p>
                ${rankingPlaces}
                </p>
                <span>
                    <ul>
                        <li>
                            <button class="btn btn-color" type="button">
                                <i class="fas fa-map-marked-alt"></i>
                            </button>
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    </div>`;
        document.getElementById('printCardAllPlaces').innerHTML = resultAllPlaces;
      });
    });
};
obtainRestaurantPlaces();
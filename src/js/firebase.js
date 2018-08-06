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

window.obtainRestaurantPlaces = () => {
  resultAllPlaces = '';
  db.collection('places').orderBy('rate', 'asc').get()
    .then(result => {
      result.forEach(allPlaces => {
        // console.log(allPlaces.data().name);
        result += `<div class="col-sm-5 my-2 mx-2">
        <div class="card ">
            <div class="box">
                <div class="img">
                    <img src="${allPlaces.data().url}" class="img-fluid img-fluid-places">
                </div>
                <h2>${allPlaces.data().name}
                    <br>
                    <span class="restaurant-type">Tipo de comida</span>
                </h2>
                <p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i> 
                    <i class="fa fa-star"></i> 
                    <i class="fa fa-star"></i> 
                    <i class="fa fa-star"></i>     
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
        document.getElementById('printCardAllPlaces').innerHTML = result;
      });
    });
};

obtainRestaurantPlaces();
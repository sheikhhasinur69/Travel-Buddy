var carObject = {
    vehicle: "Car",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo: 3,
    capacity: 4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptas, sequi illum error tenetur quis nemo provident quos veritatis."
};

var bikeObject = {
    vehicle: "Bike",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    farePerKilo: 2,
    capacity: 2,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptas, sequi illum error tenetur quis nemo provident quos veritatis."
};

var busObject = {
    vehicle: "Bus",
    imageUrl: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo: 5,
    capacity: 44,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptas, sequi illum error tenetur quis nemo provident quos veritatis."
};


const servicesArray=[bikeObject, busObject, carObject];



function displayServices(service){

  const mainSection = document.getElementById("main-section");
  const stringifiedObj = JSON.stringify(service);
  const div = document.createElement("div");
    div.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${service.vehicle}</h5>
              <p class="card-text">${service.description}</p>
              <p class="card-text"><small class="text-muted">Fare per kilo: ${service.farePerKilo}</small>
              <small class="text-muted">Capacity: ${service.capacity}</small></p>

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='handleBooking(${stringifiedObj})' >
  Launch demo modal
</button>
            </div>
          </div>
        </div>
      </div>
    `
    mainSection.appendChild(div);
   
}

function displayAllArticles(arr){
  for (let i=0; i<arr.length; i++){
    const element = arr[i];
    displayServices(element);
  }
}

displayAllArticles(servicesArray);




function handleBooking(obj){
  const modalBody = document.getElementById('modal-body');
  const stringifiedObj = JSON.stringify(obj)
  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 18rem; ">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo: ${obj.farePerKilo}</small>
    <small class="text-muted">Capacity: ${obj.capacity}</small></p>

    <div class="d-flex flex-column">
    <p >Fare: <small class="text-muted" id="fare" ></small></p>
    <p>Tax: <small class="text-muted" id="tax"></small></p>
    <p>Total Cost: <small class="text-muted" id="total"></small></p>
    <input class="form-control m-2" id= "distance-input" type="number" placeholder="Amount of kilometer" aria-label="Search">
    <input class="form-control m-2" id="quantity-input" type="number" placeholder="Amount of vehicle" aria-label="Search">
    <button onclick='calculateCost(${stringifiedObj})' class="btn btn-outline-success" type="submit">Submit</button>
  </div>

  </div>
</div>
  `
};

function calculateCost(obj){

  const quantity = document.getElementById('quantity-input').value;
  const distance = document.getElementById('distance-input').value;
  console.log(quantity, distance);
  const fareDiv = document.getElementById("fare");
  
  fareDiv.innerHTML = quantity * distance * obj.farePerKilo;
  console.log(fareDiv);
  console.log(obj);
}


document.getElementById('search-btn').addEventListener('click', function(){
  const value = document.getElementById('search-value').value;
  for (let i = 0; i < servicesArray.length; i++) {
    const element = servicesArray[i];
    if(value.toLowerCase() == element.vehicle.toLowerCase()){
      document.getElementById('main-section').innerHTML = '';
        displayServices(element);
        return;
    }
    
}
alert('Nothing found with your input');
  
})
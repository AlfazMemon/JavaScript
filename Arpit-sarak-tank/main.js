
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button"); 

// Problem 1. List of pitches on page load [3}

function fetchData()
{
    fetch('http://localhost:3000/pitches')
    .then((res)=>res.json())
    .then((data)=>displayData(data))
    .catch((err)=>console.log(err))
}
fetchData();


function displayData(data)
{
    let store = data.map((el)=>`
    <div>
        <h3 data-id=${el.id}> id : ${el.id} </h3>
        <img src="${el.image}" height="200px" width="200px">
        <h2>Founder : ${el.founder}</h2>
        <p>Description : ${el.description} </p>
        <p>Title : ${el.title} </p>
        <p> Price : ${el.price} </p>
        <p>category : ${el.category} </p>
        <a href="#" class="card-link" data-id=${el.id}> Edit </a> &nbsp;&nbsp;&nbsp;
        <button class="card-button" data-id=${el.id}> Delete </button>
        </div>
    `)
    mainSection.innerHTML = store.join("")
}


// let pitchTitleInput = document.getElementById("pitch-title");
// let pitchImageInput = document.getElementById("pitch-image");
// let pitchCategoryInput = document.getElementById("pitch-category");
// let pitchfounderInput = document.getElementById("pitch-founder");
// let pitchPriceInput = document.getElementById("pitch-price");
// let pitchCreateBtn = document.getElementById("add-pitch");


pitchCreateBtn.addEventListener("click",()=>{

    let dataObj = {
        title : pitchTitleInput.value,
        image : pitchImageInput.value,
        category : pitchCategoryInput.value,
        founder : pitchfounderInput.value,
        price : pitchPriceInput.value,
    }

    fetch("http://localhost:3000/pitches",{
        method : 'POST',
        headers :{
             'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObj)
    })

})
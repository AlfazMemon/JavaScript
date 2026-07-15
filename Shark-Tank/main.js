
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

    let arr = [];

//Url Creating Logic

function Fetchdata(){
    fetch("http://localhost:3000/pitches")
    .then((res)=>res.json())
    .then((data)=>{Display(data),arr = data})
    .catch((err)=>console.log(err))

    
}

Fetchdata();

// Display Logic

function Display(data){
    let store = data.map((ele)=>`
        <div>
        <h3 data-id=${ele.id}> id : ${ele.id} </h3>
        <img src="${ele.image}" height="200px" width="200px">
        <h2>Founder : ${ele.founder}</h2>
        <p>Description : ${ele.description} </p>
        <p>Title : ${ele.title} </p>
        <p> Price : ${ele.price} </p>
        <p>category : ${ele.category} </p>
        <a href="#" class="card-link" data-id=${ele.id}> Edit </a> &nbsp;&nbsp;&nbsp;
        <button class="card-button" data-id=${ele.id}> Delete </button>
        </div>`)

    mainSection.innerHTML = store.join(" ");        
}

// Add button Logic

pitchCreateBtn.addEventListener("click",()=>{

    let Dataobj = {
        title : pitchTitleInput.value,
        image : pitchImageInput.value,
        category : pitchCategoryInput.value,
        founder : pitchfounderInput.value,
        price : pitchPriceInput.value
    }

    fetch("http://localhost:3000/pitches",{
     method: 'POST',
     headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Dataobj)
    })
})

// Delete Button Logic

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("card-button")){
        let id = e.target.dataset.id;

        fetch(`http://localhost:3000/pitches/${id}`,{
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    })
        .then((response)=>response.json())
        .then((data)=> console.log("Deleted Succesfully"))
        .catch((error)=>console.log(error))

    }
})

// Edit Button Logic

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('card-link')){
        let updatedId = e.target.dataset.id

        fetch(`http://localhost:3000/pitches/${updatedId}`)
        .then((res)=>res.json())
        .then((data)=> {
           ((updatePitchIdInput.value = data.id),
            (updatePitchTitleInput.value = data.title),
            (updatePitchImageInput.value = data.image),
            (updatePitchfounderInput.value = data.founder),
            (updatePitchCategoryInput.value = data.category),
            (updatePitchPriceInput.value = data.price)
        )
        })
        .catch((err)=>console.log(err))
    }
})

updatePitchBtn.addEventListener('click',(e)=>{

    let updatedData = {
        id : updatePitchIdInput.value,
        title : updatePitchTitleInput.value,
        image : updatePitchImageInput.value,
        founder : updatePitchfounderInput.value,
        category : updatePitchCategoryInput.value,
        price : updatePitchPriceInput.value
    }

    fetch(`http://localhost:3000/pitches/${updatedData.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Tells the server the payload is JSON
        },
        body : JSON.stringify(updatedData)
    })

})

// Filter Logic

sortAtoZBtn.addEventListener('click',()=>{

    let ans = arr.sort((a,b)=>a.price - b.price)

    Display(ans);
})

sortZtoABtn.addEventListener('click',()=>{
    let ans = arr.sort((a,b)=>b.price - a.price)
    Display(arr);
})

filterFood.addEventListener('click',()=>{
    let abc = arr.filter((el)=>(el.category === "Food"));
    Display(abc);
})

filterElectronics.addEventListener('click',()=>{
    let abc = arr.filter((el)=>(el.category === "Electronics"))
    Display(abc);
})

filterPersonalCare.addEventListener('click',()=>{
    let abc = arr.filter((el)=>(el.category === "Personal Care"))
    Display(abc);
})

// Search Logic

searchByButton.addEventListener('click',()=>{
    let serchByValue = searchByInput.value.toLowerCase();
    if(searchBySelect.value === "title"){

        let abc = arr.filter((el)=>(el.title.toLowerCase().includes(serchByValue)))

        Display(abc);

    }
    else if(searchBySelect.value === "founder"){

        let abc = arr.filter((el)=>(el.founder.toLowerCase().includes(serchByValue)))

        Display(abc);
    }

    else{
        Display(arr);
    }
})
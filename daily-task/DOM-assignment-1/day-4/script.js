
let btn = document.getElementById('addBtn');
let notes = document.getElementById('notesContainer');

let arr = JSON.parse(localStorage.getItem("Notes")) || [];

window.addEventListener('load',()=>{
    Display();
})
function NewNotes(){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    

    if (title === "" || description === "") {
      alert("Please fill all fileds");
      return
    }

          const note = {
            title,
            description
        }

        arr.push(note);

        localStorage.setItem("Notes",JSON.stringify(arr));

        Display();
        document.getElementById('title').value = "";
        document.getElementById('description').value = "";

}


function Display(data = arr) {

   
        notes.innerHTML = "";

        data.forEach((ele, index) => {
            let store = `
            <div class="card">
                <h2>${ele.title}</h2>
                <p>${ele.description}</p>
                <button onclick="Delete(${index})" class="delete">Delete</button>
            </div>
          `
            notes.innerHTML += store;
        });

        
}



function Delete(index){

    arr.splice(index,1);

    localStorage.setItem("Notes",JSON.stringify(arr));
    
    Display();
}

function Search(){
    
    let searchInput = document.getElementById('search').value.toLowerCase();

    if(searchInput === ""){

        Display()
        return  
    }
    else{
        let abc = arr.filter((el)=>el.title.toLowerCase().includes(searchInput));
        Display(abc)
    }
}

function edit(){
    
}
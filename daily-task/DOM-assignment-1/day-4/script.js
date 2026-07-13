
let btn = document.getElementById('addBtn');
let notes = document.getElementById('notesContainer');

let arr = JSON.parse(localStorage.getItem("Notes")) || [];

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

}


function Display() {

   
        notes.innerHTML = "";

        arr.forEach((ele, index) => {
            let store = `
            <div class="card">
                <h2>${ele.title}</h2>
                <p>${ele.description}</p>
                <button onclick="Delete(${index})">Delete</button>
            </div>
          `
            notes.innerHTML += store;
        });

        document.getElementById('title').value = "";
        document.getElementById('description').value = "";
}



function Delete(index){

    arr.splice(index,1);

    localStorage.setItem("Notes",JSON.stringify(arr));
    
    Display();
}


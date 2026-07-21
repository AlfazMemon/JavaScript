let movieInput = document.getElementById('movie');

movieInput.addEventListener('keydown',(e)=>{

    if(e.key === "Enter"){
        SearchMovie();
    }

})
function SearchMovie() {

    let movie = document.getElementById('movie').value.trim();

    if (movie === "") {
        alert("Please Enter Movie Name");
        return;
    }


    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=8c94c3c9`)
        .then((Resp) => Resp.json())
        .then((data) =>{
            if (data.Response === "False") {
            alert(data.Error);
            return;
            }

            else{    
             Display(data)
            }

          
        })
        .catch((err)=>{
            alert("Movie NOt Found");
            console.log(err);
        })
        ;

       

}

function Display(data) {

    let movieContainer = document.getElementById('movieContainer');

    

    let store = `
        <div class="movie-card">

            <div class="poster">
                <img src="${data.Poster}" alt="${data.Title}">
            </div>

            <div class="details">

                <h1>${data.Title}</h1>

                <p><strong>⭐ IMDb:</strong> ${data.imdbRating}</p>
                <p><strong>📅 Year:</strong> ${data.Year}</p>
                <p><strong>🎭 Genre:</strong> ${data.Genre}</p>
                <p><strong>⏱ Runtime:</strong> ${data.Runtime}</p>
                <p><strong>🎬 Director:</strong> ${data.Director}</p>
                <p><strong>👨‍🎤 Actors:</strong> ${data.Actors}</p>

                <h3>📝 Plot</h3>
                <p>${data.Plot}</p>

            </div>

        </div> `


    movieContainer.innerHTML = store;
}


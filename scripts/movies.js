// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// console.log("hi")

let wallet = JSON.parse(localStorage.getItem("amount"));
let updatebal = document.getElementById("wallet");
updatebal.innerText = wallet;

let id;

// const url =`https://www.omdbapi.com/?apikey=45e12729&s=Avenger`;

async function searchmovie()
{
  try{
    const input = document.getElementById("search").value;
    let res = await fetch(`https://www.omdbapi.com/?apikey=45e12729&s=${input}`);
    let data = await res.json();
    // console.log("data:",data);

    let movie = data.Search;
    // console.log(movie);
    appendmovies(movie);
    // return movie;
  } catch(err){
    console.log("err");
} 
};

let movies_div = document.getElementById("movies");

function appendmovies(data)
{
    movies_div.innerHTML = null;
    console.log(data);
    data.forEach(function(elem){
        let movies_div = document.getElementById("movies");
       let div_for_movies = document.createElement("div");
       let title_div = document.createElement("div");
       let img_div = document.createElement("div");
       let button = document.createElement("button");
       button.innerText = "book ticket";
       button.setAttribute("class","book_now");


       let p = document.createElement("p");
       let img = document.createElement("img")
       img.src = elem.Poster;
       p.innerText = elem.Title;

       img_div.append(img);
       title_div.append(p,button);

       div_for_movies.append(img_div,title_div);
       movies_div.append(div_for_movies);
    });
};

async function main(){
    let data = await searchmovie();


    if(data === undefined)
    {
        return false;
    }
    appendmovies(data);
}

function debounce(func,delay){
    if (id){
        clearTimeout;
    }
    id = setTimeout(function(){
        func();
    },delay);
};


 





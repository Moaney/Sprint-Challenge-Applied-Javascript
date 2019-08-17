// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const card = document.querySelector(".cards-container");

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => card.appendChild(articleCreator(res.data)))
    .catch(err => console.log(err));


const articleCreator = (article) => {

    //create divs
    const divTags = [];
    for (let i = 0; i < 4; i++){
        divTags.push(document.createElement("div"));
    }

    //classes 
    divTags[0].classList.add("card");
    divTags[1].classList.add("headline");
    divTags[2].classList.add("author");
    divTags[3].classList.add("img-container");

    //text
    divTags[1].textContent = article.headline;

    //img
    const a = document.createElement("a");
    const aURL = article.authorPhoto;
    a.setAttribute('href', aURL);
    divTags[3].appendChild(a);

    //span 
    const span = document.createElement("span");
    span.textContent = `By: ${article.authorName}`;

    //append elements
    const elements = [divTags[1], divTags[2], divTags[3], a, span];
    elements.map(element => divTags[0].append(element));

    return divTags;
}


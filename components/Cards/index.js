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
    .then((res => {
        console.log(res.data.articles)
        card.append(articleCreator(res.data.articles))
    }))
    .catch(err => console.log(err));


const articleCreator = (data) => {

    //create divs
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")

    //classes 
    div1.classList.add("card");
    div2.classList.add("headline");
    div3.classList.add("author");
    div4.classList.add("img-container");

    //text
    div1.textContent = data.headline

    //img
    const a = document.createElement("a");
    const aURL = data.authorPhoto;
    a.setAttribute('href', aURL);
    div4.appendChild(a);

    //span 
    const span = document.createElement("span");
    span.textContent = `By: ${data.authorName}`;
    div4.appendChild(span)

    //append elements
    div1.appendChild(div2)
    div2.appendChild(div3)
    div3.appendChild(div4)
    

    return div1;
}

const tabs = document.querySelector(".tabs")
// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    //div
    const div = document.createElement("div");
    div.classList.add("header");

    //span
    const span = document.createElement("span");
    span.classList.add("date");
    span.textContent = "March 28, 2019";

    //h1
    const h1 = document.createElement("h1");
    h1.textContent = "Lambda Times";

    //span
    const span2 = document.createElement("span");
    span2.classList.add("temp");
    span2.textContent = "98°";

    //append
    const elements = [span, h1, span2];
    elements.map(element => div.append(element));

    return div;
}


document.querySelector(".header-container").appendChild(Header());

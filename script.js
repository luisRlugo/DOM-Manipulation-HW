let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  //DOM's personal website title is a bit wordy.
  //Write a JavaScript statement that selects the #main-title ID element.
  //Remember there are a couple of ways to query id. Change the text of the title to something shorter.
  const mainTitle = document.getElementById("main-title");
  mainTitle.textContent = "Toretto's Homepage";

  // Part 2
  //Select the body and change the background-color to a new color of your choice.
  const body = document.querySelector("body");
  body.style.backgroundColor = "Blue";

  // Part 3
  //Select DOM's Favorite Things list and remove the last list item
  const favorite = document.getElementById("favorite-things");
  favorite.removeChild(favorite.lastElementChild);

  // Part 4
  // Select all .special-title class elements and change their font-sizeto 2rem.
  //Remember you might have to iterate through the list of elements
  const special = document.querySelectorAll(".special-title");
  special.forEach((letter, i) => {
    letter.style.fontSize = "2rem";
  });

  // Part 5
  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

  const past = document.getElementById("past-races");
  let chicago;
  for (let word of past.children) {
    if (word.textContent == "Chicago") {
      chicago = word;
    }
  }
  past.removeChild(chicago);

  /**Creating New DOM Elements */

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li> element,
  // change the new <li> text to the name of a city, and append it to the Past Races list.

  const newEl = document.createElement("li");
  const paris = "Paris";
  newEl.textContent = paris;
  past.appendChild(newEl);

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text.
  // Think about what order you want to create the elements, and what order you want to append them in.
  const newblogPost = document.createElement("div");
  newblogPost.classList.add("blog-post");

  const newH1 = document.createElement("h1");
  newH1.textContent = "Miami";

  const newP = document.createElement("p");
  newP.textContent = "I Live for this!";

  newblogPost.appendChild(newH1);
  newblogPost.appendChild(newP);

  document.querySelector(".main").appendChild(newblogPost);

  /**Event Handlers */

  // Part 8
  // When you reload the page, the script.js file loads a random DOM quote.
  // Let's play with the included function:

  // const randomQuote = function () {
  //   document.querySelector("#quote-of-the-day").innerText = `"${
  //     quotes[Math.floor(Math.random() * quotes.length)]
  //   }"`;
  // };

  // Query select the #quote-title ID element and add a click event handler.
  // That event handler should use the function randomQuote whenever #quote-title is clicked.
  this.querySelector("#quote-title").addEventListener("click", randomQuote);

  // Part 9
  // Select all .blog-post class elements.
  // Iterate through the list of .blog-post class elements
  // and apply two event handlers to each node.
  // The first event handler should be listening for mouseout events
  //while the second handler should be listening for mouseenter events.

  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red
  const blogPosts = document.querySelectorAll(".blog-post");
  blogPosts.forEach((post) => {
    post.addEventListener("mouseout", () => {
      post.classList.toggle("purple");
    });
    post.addEventListener("mousenter", () => {
      post.classList.toggle("red");
    });
  });

  // Test it out!

  // Hint:
  // Remember the document node property .classList and the document node method .toggle()
});

let message_button = document.getElementById("random-button");
let random_message = document.getElementById("random-message");

//
// 
const facts = 
[
"Three presidents, all Founding Fathers—John Adams, Thomas Jefferson, and James Monroe—died on July 4. Presidents Adams and Jefferson also died the same year, 1826; President Monroe died in 1831. Coincidence?",
"The Barbie doll's full name is Barbara Millicent Roberts, from Willows, Wisconsin. Her birthday is March 9, 1959, when she was first displayed at the New York Toy Fair.",
"There actually aren't “57 varieties” of Heinz ketchup, and never were. Company founder H.J. Heinz thought his product should have a number, and he liked 57. Hint: Hit the glass bottle on the “57,” not the bottom, to get the ketchup to flow.",
"The tallest man ever recorded was American giant Robert Wadlow (1918-1940), who stood 8 feet 11 inches. Wadlow's size was the result of abnormally enlarged pituitary gland.",
"The tallest living man is 37-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue.",
"The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997.",
"Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread?",
"The Four Corners is the only spot in the US where you can stand in four states at once: Utah, Colorado, Arizona and New Mexico. ",
"Canada is south of Detroit (just look at a map).",
"The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros.",
]

function showMessage() {
  random_message.innerHTML = facts[Math.floor(Math.random() * facts.length)];
  
  random_message.style.display = "flex";
  message_button.innerHTML = "Another fact?";
  message_button.style.cursor = "default";
}

message_button.addEventListener("click", showMessage);
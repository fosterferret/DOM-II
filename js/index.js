// Your code goes here

//#1 - onmouseenter listener for header image to be inverted
const headerImg = document.querySelector("img");
headerImg.onmouseenter = function () {
    headerImg.style.filter = "invert(0.80)";
}

//#2 - onmouseleave listener for header image to be inverted
headerImg.onmouseleave = function () {
    headerImg.style.filter = ""
}

// //3 - onload listener for page to alert "Welcome" upon loading
// document.body.onload = function () {
//     alert("Welcome to Fun Bus, Minion!");
// }

//4 - doubleclick event for first mouse image to change image
const firstBodyImage = document.getElementsByTagName("img")[1];
firstBodyImage.ondbclick = function () {
        firstBodyImage.removeAttribute('src');
        firstBodyImage.setAttribute('src', 'https://thumbs.gfycat.com/HatefulInbornKoodoo-small.gif')
}


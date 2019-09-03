// Your code goes here

//#1 - onmouseenter listener for header image to be inverted
const headerImg = document.querySelector("img");
headerImg.onmouseenter = function () {
    headerImg.style.filter = "invert(0.80)";
}

//2 - scroll event listener
window.addEventListener("scroll", () => {
    if (!document.body.style.opacity) {
        document.body.style.opacity = 1;
      }
      document.body.style.opacity = Number(document.body.style.opacity) * 0.90;
})

//#3 - onmouseleave listener for header image to be inverted
headerImg.onmouseleave = function () {
    headerImg.style.filter = ""
}

// 4 - onload listener for page to alert "Welcome" upon loading
// document.body.onload = function () {
//     alert("Welcome to Fun Bus, Minion!");
// }

//5 - doubleclick event listener for first mouse image to change image
const firstBodyImage = document.getElementsByTagName("img")[1];
firstBodyImage.ondblclick = function () {
        firstBodyImage.removeAttribute('src');
        firstBodyImage.setAttribute('src', 'https://thumbs.gfycat.com/HatefulInbornKoodoo-small.gif')
}

// 6 - resize event listenere - page's opacity value changes
window.addEventListener('resize', () => {
  if (!document.body.style.opacity) {
    document.body.style.opacity = 1;
  }
  document.body.style.opacity = Number(document.body.style.opacity) * 0.95;
});


//7 - focus event listeners for nav bar 
document.querySelectorAll('a')
  .forEach(el => el.addEventListener('focus', () => {
      el.style.color ="green";
  }));

//8 - click event listener for nav and preventDefault method to stop navigation from reloading page
  const nav = document.querySelector('nav');
  nav.onclick = function () {
      nav.style.backgroundColor ="yellow";
      nav.preventDefault();
  }

//9 - mouseover event listener
  const firstHeading = document.querySelector('h1')
  firstHeading.onmouseover = function () {
      firstHeading.textContent = "TAKE THAT MOUSE AWAY FROM ME!";
  }

//10 - keydown
window.onkeydown = function () {
    alert ("HAHAHAHA THIS IS NOT A USER FRIENDLY SITE");
}




//will insert audio into site HTML after tomorrow
// window.onload = function() {
//     let context = new AudioContext();
//   }


// // let iframe = document.createElement('iframe')
// // iframe.setAttribute("src", "sound/silence.mp3");
// // iframe.setAttribute("allow", "autoplay");
// // iframe.setAttribute("id", "audio");
// // iframe.setAttribute("style", "display:none");
// // document.body.appendChild(iframe);


// let audio = document.createElement('audio');
// audio.setAttribute("autoplay","");
// audio.setAttribute("id", "scream");
// document.body.appendChild(audio);

// let source = document.createElement('source');
// source.setAttribute("src", "sound/scream.mp3")
// source.setAttribute("type", "audio/mp3")
// audio.appendChild(source);

// document.addEventListener('click', musicPlay);
// function musicPlay() {
//     document.getElementById('scream').play();
//     document.removeEventListener('click', musicPlay);
//}
//GAME IS BUGGY FOR NOW - WILL FIX AT THE END OF THE DAY!!!!!!!!

let blocksContainer = document.querySelector('.blocks')
blocksContainer.onclick = function (event) {
    let target = event.target
    console.log(target);
    blocksContainer.insertBefore(target, blocksContainer.childNodes[0]);
}

// blocksContainer.onmousedown = function(event) {
//     let target = event.target
//     blocksContainer.insertBefore(target, blocksContainer.childNodes[0]);
//     target.style.marginLeft = "100px"; 


blocksContainer.onmousedown = function (event) {
    let target = event.target;
    let i = 10;

    if (event.type === "mousedown" && event.type !== !"mouseup") {
        setInterval(
            function () {
                return target.style.marginLeft = (i++) + "px";
            }, 10)
    }
}

blocksContainer.onmouseup = function (event) {
    let target = event.target;
    return target.style.marginLeft = "8px"
}


    // function animate() {

    //     let timer = setInterval(function() {
    //         // Elapsed time from the start
    //         let elapsedTime = Date.now() - start;

    //         if (elapsedTime >= 1000) {
    //         clearInterval(timer); // Animation finishes after 5 seconds
    //         return;
    //         }

    //         // Draw the animation
    //         draw(elapsedTime, target);

    //     }, 10);

    //     // As elapsedTime increases, left increases from 0px to 5000px
    //     function draw(elapsedTime, e) {
    //         e.style.position = "relative";
    //         e.style.left = elapsedTime + 'px';
    //     } 
    // }

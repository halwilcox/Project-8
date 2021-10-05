// LINK
const modal = document.getElementById("myModal");
const charBtn = document.querySelectorAll(".char-btn");
// var span = document.getElementsByClassName("close")[0];
const primaryModalContent = document.getElementById("primary-modal");

const characters = {
    "link": {
        name: "Link",
        img: "https://www.ssbwiki.com/images/0/00/Link_BotW.png"
    },
    "zelda": {
        name: "Zelda",
        img: "https://www.ssbwiki.com/images/0/00/Link_BotW.png"
    },
    
}

for (let i = 0; i < charBtn.length; i++) {
    charBtn[i].addEventListener('click', function(e) {
        const character = characters[e.target.id]
        primaryModalContent.innerHTML = ""
    
        const span = document.createElement("span");
        span.classList.add("close")
        span.innerHTML = "&times;"
        primaryModalContent.append(span)
        span.addEventListener('click', () => {
            modal.style.display = "none";
            console.log("banana")
        })
        primaryModalContent.innerHTML += `<h2>${character.name}</h2>
        <img src="${character.img}"/>`
        
        modal.style.display = "block";
    } )
}

// btn.onclick = function() {
//     primaryModalContent.innerHTML = ""

//     const span = document.createElement("span");
//     span.classList.add("close")
//     span.textContent = "&times;"
//     span.addEventListener('click', () => {
//         modal.style.display = "none";
//     })
//     primaryModalContent.append(span)
//     primaryModalContent.innerHTML += `<h2>Link</h2>`
    
//     modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
   }
}

// // ZELDA
// var modal2 = document.getElementById("myModal2");
// var btn = document.getElementById("zelda");
// var span = document.getElementsByClassName("close")[0];
// console.log(modal2)
// btn.onclick = function() {
//   modal2.style.display = "block";
// }
// span.onclick = function() {
//   modal2.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }

// //MIDNA
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("midna");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// //ZANT
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("zant");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// //GROOSE
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("groose");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// //GHIRAHIM
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("ghirahim");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// //SIDON
// var modal = document.getElementById("mymodal");
// var btn = document.getElementById("sidon");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// //GANONDORF
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("ganondorf");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// //HESTU
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("hestu");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// LINK
const modal = document.getElementById("myModal");
const charBtn = document.querySelectorAll(".char-btn");
// var span = document.getElementsByClassName("close")[0];
const primaryModalContent = document.getElementById("primary-modal");

const characters = {
    "link": {
        name: "Link",
        img: "https://www.ssbwiki.com/images/0/00/Link_BotW.png",
        game: "Game: Breath of the Wild",
        age: "Age: 17-20 (Physically), 117-120 (Biologically)",
        sex: "Sex: Male",
        height: "Height: 4‘11“ - 5‘2“",
        weight: "Weight: Around 8.5 Hyrule apples"
    },
    "zelda": {
        name: "Link",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f6af432-7cb0-46ad-9df3-322992d84fea/d327fa4-9add3b7a-54f5-40ef-96a0-c6ff6eed85ce.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80ZjZhZjQzMi03Y2IwLTQ2YWQtOWRmMy0zMjI5OTJkODRmZWEvZDMyN2ZhNC05YWRkM2I3YS01NGY1LTQwZWYtOTZhMC1jNmZmNmVlZDg1Y2UuanBnIn1dXX0.CDzvwhLIuhEDBhOF_E8bpH6lcx0wp-bWQYsA0-4VGMU",
        game: "Game: Wind Waker",
        age: "Age: 16",
        sex: "Sex: Male",
        height: "Height: Short",
        weight: "Weight: Light"
    },
    "midna": {
        name: "Adult Link",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e738c17-7f3c-422e-8225-f8c782b08626/d9von0a-7c594d3a-d335-4aaf-8231-33ed74a78fef.png/v1/fill/w_1024,h_1024,q_75,strp/ocarina_of_time__adult_link_render_by_nibroc_rock-d9von0a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wZTczOGMxNy03ZjNjLTQyMmUtODIyNS1mOGM3ODJiMDg2MjYvZDl2b24wYS03YzU5NGQzYS1kMzM1LTRhYWYtODIzMS0zM2VkNzRhNzhmZWYucG5nIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTEwMjQifV1dfQ.y-ZAQvv0t1Mm5U7mz5Aioka-QT1cGKIn2enFgLt0kTc",
        game: "Game: Ocarina of Time",
        age: "Age: 18",
        sex: "Sex: Male",
        height: "Height: 5' 5“",
        weight: "Weight: 149 lbs"
    },
    "zant": {
        name: "Link?",
        img: "https://i.pinimg.com/originals/99/42/67/994267a1b9d4986b5110b3916ebffdbb.jpg",
        game: "Game: Breath of the Wild",
        age: "Age: it's a mystery",
        sex: "Sex: Female",
        height: "Height: 4‘11“ - 5‘2“",
        weight: "Weight: A woman does not say"
    },
    "groose": {
        name: "Dark Link",
        img: "https://images-geeknative-com.exactdn.com/wp-content/uploads/2015/12/23161919/igor-braulio-dark-link-igor-braulio1.jpg?strip=all&lossy=1&ssl=1",
        game: "Game: A Link to the Past, Ocarina of Time, Oracle of Ages, Twilight Princess, Spirit Tracks, A Link Between Worlds",
        age: "Age: 16ish",
        sex: "Sex: Male",
        height: "Height: 4‘11“ - 5‘2“",
        weight: "Weight: It is too dark to tell"
    },
    "ghirahim": {
        name: "Wolf Link",
        img: "https://farm8.staticflickr.com/7141/6839599303_bc985564af_o.jpg",
        game: "Twilight Princess",
        age: "Age: 16",
        sex: "Sex: Male",
        height: "Height: 34“",
        weight: "Weight: 75lbs"
    },
    "hestu": {
        name: "OG Link",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2af7648-2754-42e7-b98f-0fd9fa6ab5fd/d6k4qa9-958eaa0b-39b5-4ff4-a1c3-d930333347c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mMmFmNzY0OC0yNzU0LTQyZTctYjk4Zi0wZmQ5ZmE2YWI1ZmQvZDZrNHFhOS05NThlYWEwYi0zOWI1LTRmZjQtYTFjMy1kOTMwMzMzMzQ3YzMucG5nIn1dXX0.luAKGh2iJbAaSkuWLUgKB18QqQ0a8n91TroOKN6rYgY",
        game: "The Legend of Zelda",
        age: "Age: 12",
        sex: "Sex: Male",
        height: "Height: Tiny",
        weight: "Weight: Child-like"
    },
    "ganondorf": {
        name: "Link",
        img: "https://vignette.wikia.nocookie.net/mighty355/images/2/22/Zelda_(SSB_3DS_%26_Wii_U).png/revision/latest?cb=https://vignette.wikia.nocookie.net/mighty355/images/2/22/Zelda_(SSB_3DS_%26_Wii_U).png/revision/latest?cb=20150815195546",
        game: "The Legend of Zelda",
        age: "Age: Young to young-adult",
        sex: "Sex: Female",
        height: "Height: Varies",
        weight: "Weight: Slender and fit"
    },
    "sidon": {
        name: "Link",
        img: "http://pm1.narvii.com/6273/e42f43b29dd85dd7c5af0dc57fb0c8b7dd46d3e5_hq.jpg",
        game: "The Legend of Zelda: TV series",
        age: "Age: Young adult",
        sex: "Sex: Male",
        height: "Height: 5' 4in",
        weight: "Weight: 120lbs"
    },
}

for (let i = 0; i < charBtn.length; i++) {
    charBtn[i].addEventListener('click', function (e) {
        const character = characters[e.target.id]
        primaryModalContent.innerHTML = `<img src="${character.img}"/>
        <h2>${character.name}</h2><br>
        ${character.game}<br>
        ${character.age}<br>
        ${character.sex}<br>
        ${character.height}<br>
        ${character.weight}<br>`
    
        const span = document.createElement("span");
        span.classList.add("close")
        span.innerHTML = "&times;"
        primaryModalContent.append(span)
        span.addEventListener('click', () => {
            modal.style.display = "none"
        })

        modal.style.display = "block";
    })
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
   }
}


const createCard = () => {
    data.map(item => {
        let card = `
                <div class="card-parent">
                    <div class="city-card" style ="background-image:url('${item.url}')">
                    <div class="times" id=${item.id}>
                    </div>
                 </div>            
                <h5 class="city-name"><i class="fa-solid fa-arrow-left"></i> ${item.city}</h5>
                </div>
            `
        document.querySelector(".card-container").innerHTML += card;
    });
}

const showCard = () => {
    //card üzerine tıklayınca
    document.querySelectorAll(".city-card").forEach((card) => {
        card.addEventListener("click", () => {

            if (card.classList.contains("active")) {
                document.querySelector("body").classList.add("body-default-color");
                card.classList.remove("active")
            } else {
                document.querySelectorAll(".city-card").forEach((otherCards) => {
                    otherCards.classList.remove("active")
                })
                card.classList.add("active")
            }
        })
    })
    //şehir üzerine tıklayınca
    document.querySelectorAll(".city-name").forEach((city) => {
        let currentCard = city.previousElementSibling
        city.addEventListener("click", () => {
            if (currentCard.classList.contains("active")) {
                currentCard.classList.remove("active")
            } else {
                document.querySelectorAll(".city-card").forEach((otherCards) => {
                    otherCards.classList.remove("active")
                })
                currentCard.classList.add("active")
            }
        })
    })
}

const setTime = () => {
    let date = new Date()
    document.querySelectorAll(".times[id='1']").forEach((city) => {
        city.innerHTML = `<span class="current-time">${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}<span/>`
    })
    document.querySelectorAll(".times[id='2']").forEach((city) => {
        city.innerHTML = `<span class="current-time">${date.getHours() - 3}:${date.getMinutes()}:${date.getSeconds()}<span/>`
    })
    document.querySelectorAll(".times[id='3']").forEach((city) => {
        city.innerHTML = `<span class="current-time">${date.getHours() - 2}:${date.getMinutes()}:${date.getSeconds()}<span/>`
    })
    document.querySelectorAll(".times[id='4']").forEach((city) => {
        city.innerHTML = `<span class="current-time">${date.getHours() + 5}:${date.getMinutes()}:${date.getSeconds()}<span/>`
    })
    document.querySelectorAll(".times[id='5']").forEach((city) => {
        city.innerHTML = `<span class="current-time">${date.getHours() - 8}:${date.getMinutes()}:${date.getSeconds()}<span/>`
    })
    document.querySelectorAll(".times[id='6']").forEach((city) => {
        city.innerHTML = `<span class="current-time">${date.getHours() + 5}:${date.getMinutes()}:${date.getSeconds()}<span/>`
    })
}

//#region funcitons start area
createCard()
showCard()
setInterval(setTime, 1000)
//#endregion

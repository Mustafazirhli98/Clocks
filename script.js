let container = document.querySelector(".container");

//#region functions 
//ekran boyutuna göre tasarıma dinamik olarak müdahale edebilmek için.
const checkScreenWidth = () => {
    if (window.innerHeight < 900) {
        container.style.height = "auto";
        container.style.height = "100%";
    }
}

const createCard = () => {
    //data'nın içindeki her bir eleman için card oluşturur.
    data.map(item => {
        let card = `
                <div class="card-parent">
                    <div id=${item.id} class="city-card" style ="background-image:url('${item.url}')">
                    <div class="times" id=${item.id}>
                    </div>
                 </div>            
                <span class="city-name"><i class="pointerArrow fa-solid fa-arrow-left"></i> ${item.city}</span>
                </div>
            `
        document.querySelector(".card-container").innerHTML += card;

        //arrow icon'unun mobil boyutta yukarı yöne bakması için
        let pointerArrow = document.querySelectorAll(".pointerArrow")
        pointerArrow.forEach((arrow) => {
            window.addEventListener("resize", () => {
                let windowWidth = window.innerWidth
                if (windowWidth < 900) {
                    arrow.classList.add("fa-rotate-90")
                } else arrow.classList.remove("fa-rotate-90")
            })
        })

    });
}

const showCard = () => {
    //card üzerine tıklayınca
    document.querySelectorAll(".city-card").forEach((card) => {
        card.addEventListener("click", () => {
            let lastColor = `bg-${card.id}`
            //önceki bg-color'ı kaldırmak için 
            container.classList.remove(container.classList.item(1))
            //yeni bg-color eklemek için
            container.classList.add(lastColor)
            if (card.classList.contains("active")) {
                card.classList.remove("active");
                checkScreenWidth()
                container.classList.remove(container.classList.item(1))
                container.classList.add("bg-default")
            } else {
                document.querySelectorAll(".city-card").forEach((otherCards) => {
                    otherCards.classList.remove("active");

                });
                card.classList.add("active");
                checkScreenWidth()
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
//#endregion

//#region funcitons start here
createCard()
showCard()
setInterval(setTime, 1000)
//#endregion

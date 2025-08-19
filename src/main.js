const download = document.querySelector('.download');
const container = document.querySelector("#container");
const number = document.querySelector("#number")
download.addEventListener("click", (e) => {
    download.classList.add('start');
    let degree = 0;
    let interval = setInterval(() => {
        degree++;
        if(degree > 100){
            clearInterval(interval)
            number.innerHTML = `<i class="fa-solid fa-check"></i><br/><small>100% Done</small>`;
            container.classList.add('done');
            return;
        }
        container.style.background = `conic-gradient(#f5036c ${degree}%, #333 0%)`;
        number.innerHTML = degree + `<span>%<span>`
    },100)
})
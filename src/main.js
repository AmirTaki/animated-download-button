const download = document.querySelector('.download');
const container = document.querySelector("#container");
const number = document.querySelector("#number")
download.addEventListener("click", (e) => {
    download.classList.add('start');
    let degree = 0;
    let interval = setInterval(() => {
        degree ++;
        if(degree > 100){
            clearInterval(interval)
            number.textContent = `<i class="fa-solid fa-check"></i>`
        }
    })
})
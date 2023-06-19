const ans = document.querySelector(".main");

ans.addEventListener('click', (e) => {
    let target = e.target
    let val = target.dataset.value
    target.style.backgroundColor = '#8b8b8b';
})
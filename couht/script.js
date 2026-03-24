const ns = document.getElementById('n-s');
const start = document.getElementById('start');
const result = document.getElementById('resultdis');

function say() {
    const target = 0;

    let c = parseInt(ns.value);

    function islet() {
        if (c >= target) {
            result.textContent = `${c} `;
            c--;
            setTimeout(islet, 1000);
        }
    }

    islet();
}

start.addEventListener('click', say);

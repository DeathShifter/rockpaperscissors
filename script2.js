let n = 10;
let para = document.querySelector('.prime');

for (i = 2; i <= n; i++) {
    if (i % 2 !== 0) {
        para.textContent += `${i}, `;
    }
}
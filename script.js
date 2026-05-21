const clicker = document.querySelector('.js-cookie')
const points = document.querySelector('.js-points')
const upgrade = document.querySelector('.js-upgrade')

let score = 0
let clickValue = 1 

const thresholds = [
    { score: 250, size: "28px", color: "purple", weight: "bold",   style: "normal" },
    { score: 200, size: "24px", color: "blue",   weight: "bold",   style: "normal" },
    { score: 150, size: "22px", color: "red",    weight: "bold",   style: "normal" },
    { score: 100, size: "20px", color: "gold",   weight: "bold",   style: "italic" },
    { score: 50,  size: "18px", color: "green",  weight: "normal", style: "normal" }
];

clicker.addEventListener('click', () => {
    score = score + clickValue
    points.textContent = score

    const currentStyle = thresholds.find(t => score >= t.score);

    points.style.fontSize   = currentStyle ? currentStyle.size   : "16px";
    points.style.color      = currentStyle ? currentStyle.color  : "black";
    points.style.fontWeight = currentStyle ? currentStyle.weight : "normal";
    points.style.fontStyle  = currentStyle ? currentStyle.style  : "normal";
})

upgrade.addEventListener('click', () => {
    if(score < 100){
        alert("NEED MORE POINTS")
        return
    } else {
        score = score - 100
        clickValue = 2
        points.textContent = score
    }
})
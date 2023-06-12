const mot ="bateaux";

let motMasque = ""
for (let i = 0; i < mot.length; i++) {
    motMasque += "*"
}

document.getElementById('motMasque').textContent = motMasque
// scripts.js

function drawTree(x) {
    for (var i = 1; i <= x; i++) {
        star = " ";

        for (j = 1; j <= i; j++) {
            star += "*";

        }
        console.log(star);
    }
}

drawTree(10);

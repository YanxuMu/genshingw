const api_url = "https://api.genshin.dev/";
const body = document.querySelector("body");
let enemyList;
const enemyGrid = document.querySelector(".enemy-grid")

function upperCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

async function getEnemies() {
    const response = await fetch(api_url+"enemies");
    enemyList = await response.json();
    console.log(enemyList.length);


    for (let i = 0; i < enemyList.length; i++) {
        let name = enemyList[i];

        let picLink = "https://api.genshin.dev/enemies/" + enemyList[i] + "/icon";
        
        console.log(picLink);
        let enemyCard = document.createElement("div");
        let img = document.createElement("img");
        img.src = picLink;
        img.style.height = "100%";
        img.style.width = "100%";
        enemyCard.appendChild(img);
        enemyGrid.appendChild(enemyCard);

        let enemyName = document.createElement("h3");
        
        enemyName.textContent = upperCase(name);
        enemyCard.appendChild(enemyName);
        enemyName.style.fontFamily = "Helvetica";
        enemyName.style.fontSize = "10px";
    }
}

getEnemies();

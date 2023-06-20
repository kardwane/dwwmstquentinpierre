//! fetch : un moyen facile et logique de récupérer des ressources à travers le réseau de manière asynchrone..
// const url = "https://official-joke-api.appspot.com/"
const url = "https://official-joke-api.appspot.com/random_joke"
// const url = "https://official-joke-api.appspot.com/random_ten"
// const url = "https://official-joke-api.appspot.com/jokes/random"
// const url = "https://official-joke-api.appspot.com/jokes/ten"

fetch(url).then(handleFetch);

function handleFetch(responseText) {
    // console.log(responseText);
    // La propriété ok est un boolean indiquant si cela s'est bien passé ou non.
    if(responseText.ok){
        // si le parse fonctionne, il lancera le callback de then
        // sinon ce sera le callback de catch
        responseText.json()
            .then(showResult)
            .catch(error=>console.log(error));
    }else{
        console.log(responseText.statusText);
    }
}
function showResult(data){
    // { id: 216, type: "general", setup: "What do you call a fashionable lawn statue with an excellent sense of rhythmn?"
    // , punchline: "A metro-gnome" }
    console.log(data);
    //je rempli ma page avec les reponses de l'API
    document.querySelector("#jokeId").textContent = `joke n° : ${data.id}`
    document.querySelector("#jokeType").textContent = `type : ${data.type}`
    document.querySelector("#jokeSetup").textContent = `setup : ${data.setup}`
    document.querySelector("#jokePunchline").textContent = `punchline : ${data.punchline}`
}
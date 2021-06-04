let player1 = {
    name: "Kitana",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon:["fan"],
    attack: name + 'fight...'
},
player2 = {
    name: "",
    hp: "",
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon:["club"],
    attack: name + 'fight...'
};

const div = document.getElementsByClassName("arenas");

const createPlayer = (name, obj) => {
    div.insertAdjacentHTML('afterbegin', `
    <div class="${name}">
        <div class="progressbar">
            <div class="life">${obj.hp}</div>
            <div class="name">${obj.name}</div>
        </div>
        <div class="character">
            <img src="${obj.img}" />
        </div>
    </div>
    `)
}

createPlayer('player1', player1);
createPlayer('player2', player2);
console.log('hello world')

//HP Tracker

const addButton = document.querySelector('#plus');
const subtractButton = document.querySelector('#minus');
let hp = 58;

addButton.onclick = function(){
    let addedHP = hp + 1;
    hp = addedHP;
    document.getElementById('total-hp').innerHTML = 'HP: ' + hp
};

subtractButton.onclick = function(){
    let minusHP = hp - 1;
    hp = minusHP;
    document.getElementById('total-hp').innerHTML = 'HP: ' + hp
}



//Add and Delete Effects

document.querySelector('#effect-form'), addEventListener('submit', statusEffectHandler)
const submitEffect = document.querySelector('#submit-effect');
let effectList = [];

function statusEffectHandler(e){
    e.preventDefault();
    
    const effectField = document.querySelector('#effect-button')
    
    const currentEffectList = document.createElement('li')
    currentEffectList.setAttribute("id","effect-li")
    const currentEffect = document.createElement('span')
    currentEffect.setAttribute("id", "effect-span")
    currentEffect.textContent = effectField.value;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteEffect);
    currentEffectList.appendChild(deleteBtn);
    
    currentEffectList.appendChild(currentEffect)
    
    document.querySelector('#print-status').appendChild(currentEffectList)
    effectList.push(currentEffectList)
    effectField.value = ''
}

function deleteEffect(event){
    event.target.parentNode.remove()
}

// Alert Effect and Round Counter

const nextRound = document.querySelector('#next-round');
let startRound = 1;

nextRound.onclick = function(){
    let statusEffects = []
    for (let i = 0; i < effectList.length; i++) {
        statusEffects.push(effectList[i].textContent)
    }
    alert(statusEffects)
    let currentRound = startRound + 1;
    startRound = currentRound;
    document.getElementById('print-round').innerHTML = "Round " + startRound 
}


//Movement Tracker

// document.querySelector("movement-history"), addEventListener ('submit', movementHistoryHandler)

// const movementButton = document.querySelector('#movement-button')

// let mvmntList = []

// function movementHistoryHandler(e) {
//     e.preventDefault();

//     const movementField = document.querySelector ('#print-movement')

//     const movementHistory = document.createElement('li')
//     movementHistory.setAttribute('id','mvmnt-li')
//     const movement = document.createElement('span')
//     movement.setAttribute('id','mvmnt-span')

//     movement.textContent = movementField.value;
//     movementHistory.textContent = movementField.value;
//     movementHistory.appendChild(movement)

//     document.querySelector('#print-movement').appendChild(movementHistory)

//     mvmntList.push(movementHistory)
//     movementField.value = ''
// }

const javaScriptImage = "../assets/javascript.png";
const javaImage = "../assets/java.png";
const pythonImage = "../assets/python.png";


let people = [];

async function loadPeople() {
    const res = await fetch('http://localhost:3001/devs');
    const json = await res.json();
    people = json;
    getPeopleLength();
    renderPeople();
    
}


function getPeopleLength(){
    document.getElementsByClassName('counter-dev')[0].textContent=people.length;
}

function renderPeople() {
    let newDiv = ''
    console.log(people);
    people.forEach(person => {
        const skills = renderSkills(person.programmingLanguages)
        newDiv = newDiv + `<div> 
        <span>${person.name}</span>
        ${skills}
        </div>`
    })

    document.getElementsByClassName('render-people')[0].innerHTML = newDiv;
}

function renderSkills(programmingLanguages) {
    let skills = '';
    programmingLanguages.forEach(language => {
        skills = skills + `<img src="${getImage(language.language)}" width="48" height="48" alt="Italian Trulli">`
    })

    return skills;
}

function getImage(language) {
    if (language === 'JavaScript') {
        return javaScriptImage;
    } if (language === 'Java') {
        return javaImage;
    }
    if (language === 'Python') {
        return pythonImage;
    }
}

function typeData(teste) {
    console.log(teste);

}
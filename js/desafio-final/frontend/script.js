const javaScriptImage = "../assets/javascript.png";
const javaImage = "../assets/java.png";
const pythonImage = "../assets/python.png";



let people = [];
let filterPeople = [];
let filterPeopleName = [];

async function loadPeople() {
    const res = await fetch('http://localhost:3001/devs');
    const json = await res.json();
    people = json;
    filterPeople = json;
    filterPeopleName = json;
    renderPeople();
    
}

function filterAnd() {
    let filteredPeople = filterPeopleName;
    const filterByJava = document.getElementById("java").checked;
    const filterByJavascript = document.getElementById("javascript").checked;
    const filterByPython = document.getElementById("python").checked;

    if (filterByJava) {
        filteredPeople = filteredPeople.filter(person => person.programmingLanguages.some(p=> p.id ==='Java'))
    }
    if (filterByJavascript) {
        filteredPeople = filteredPeople.filter(person => person.programmingLanguages.some(p=> p.id ==='JavaScript'))
    }

    if (filterByPython) {
        filteredPeople = filteredPeople.filter(person => person.programmingLanguages.some(p=> p.id ==='Python'))
    }

    people = filteredPeople;
    renderPeople();
}

function filterOr() {
    let filteredPeople = filterPeopleName;
    let filteredPeopleJava = [];
    let filteredPeopleJs = [];
    let filteredPeoplePython = [];
    
    const filterByJava = document.getElementById("java").checked;
    const filterByJavascript = document.getElementById("javascript").checked;
    const filterByPython = document.getElementById("python").checked;

    if (filterByJava) {
        filteredPeopleJava = filteredPeople.filter(person => person.programmingLanguages.some(p=> p.id ==='Java'))
    }
    if (filterByJavascript) {
        filteredPeopleJs = filteredPeople.filter(person => person.programmingLanguages.some(p=> p.id ==='JavaScript'))
    }

    if (filterByPython) {
        filteredPeoplePython = filteredPeople.filter(person => person.programmingLanguages.some(p=> p.id ==='Python'))
    }

    let newArray = [...filteredPeopleJava, ...filteredPeopleJs, ...filteredPeoplePython];

    const filteredArr = newArray.reduce((acc, current) => {
        const x = acc.find(item => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

    people = filteredArr;
    renderPeople();
}

function mainFilter() {
    const filterByAnd = document.getElementById("and").checked;
    const filterByOr = document.getElementById("or").checked;
    if (filterByAnd && !filterByOr) {
        filterAnd();
    } else if (!filterByAnd && filterByOr) {
        filterOr();
    } else {
        people = filterPeopleName
        renderPeople();
    }
}

function getPeopleLength(){
    document.getElementsByClassName('counter-dev')[0].textContent=people.length;
}

function renderPeople() {
    let newDiv = ''
    people.forEach(person => {
        const skills = renderSkills(person.programmingLanguages)
        newDiv = newDiv + `<div class="person"> 
        <img src="${person.picture}" width="48" height="48" alt="Person photo"/>
        <div class="div-person-name-skills">
        <span>${person.name}</span>
        <div class="div-person-skills">
        ${skills}
        </div>
        </div>
        </div>`
    })
    getPeopleLength();
    document.getElementsByClassName('render-people')[0].innerHTML = newDiv;
}

function renderSkills(programmingLanguages) {
    let skills = '';
    programmingLanguages.forEach(language => {
        skills = skills + `<img src="${getImage(language.language)}" width="24" height="24" alt="Languages">`
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

function typeData(input) {
    const peopleFilter = filterPeople.map(person => {
        if(person.name.toLowerCase().includes(input.toLowerCase())) {
            return person;
        }
    }).filter(o=> o);
    filterPeopleName = peopleFilter;
    mainFilter();
}

class Activity {
    constructor(id, title, description, imgURL) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.currentId = 1;
    }

    createActivity(title, description, imgUrl) {
        const newActivity = new Activity(
            this.currentId,
            title,
            description,
            imgUrl
        )
        this.activities.push(newActivity);

        this.currentId++;
    }

getAllActivities() {
    return this.activities;
}
}

const repository = new Repository();

const activitiesToCard = ({ title, description, imgURL}) => {
    
    const cardTitle = document.createElement("h3");
    const cardDescription = document.createElement("p");
    const cardImage = document.createElement("img");
    const cardContainer = document.createElement("div");

    cardTitle.textContent = title;
    cardDescription.textContent = description;
    cardImage.src = imgURL;

    cardContainer.classList.add("cards-container-dom")// aca va el conteiner de las cards. divContainerCard

    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardDescription);

    console.log(cardImage);

    return cardContainer;
}

const addToDOM = () => {
    const containerCards = document.getElementById("cards-container-dom")//aca va el conteiner de las cards

    containerCards.innerHTML = "";

    const allActivities = repository.getAllActivities();
    const allElements = allActivities.map(activitiesToCard);

    allElements.forEach((element) => {
        containerCards.appendChild(element)
    })
    
}

addToDOM();

const handleSubmit = (event) => {
    event.preventDefault()

    const form = document.getElementById("form");
    const inputTitle = document.getElementById("title").value;
    const textArea = document.getElementById("description").value;
    const inputImage = document.getElementById("image").value;

    if(!inputTitle || !inputImage || !textArea) {
        return alert ("Faltan datos");
    }

    repository.createActivity(inputTitle, textArea, inputImage)

    addToDOM();
    
    form.reset();
}

const btnSubmit = document.getElementById("addButton");

btnSubmit.addEventListener("click", handleSubmit);
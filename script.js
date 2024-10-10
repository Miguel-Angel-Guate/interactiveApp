const messages = [
    "Please hold, as we load up the best experience for you...",
    "Loading content, please wait...",
    "You're all set!",
    "Best Experience with the guys..",
    "Turn the sound on",
];

const firstPartMessages = messages.slice(0, 3);
const secondPartMessages = messages.slice(3);

const element = document.getElementById('there');

const displayMessage = (message) => {
    element.innerHTML = message;
};

const clearMessage = () => {
    element.innerHTML = "";
};

const appendParagraph = (message) => {
    const p = document.createElement('p');
    p.textContent = message;
    element.appendChild(p);
};

const appendImage = (parameter) => {
    const img = document.createElement("img");
    img.src = "./assets/spe.png";
    img.style.width = "80px";

    const imageElement = element.appendChild(img);
    const eventoImage = imageElement.addEventListener("click", () => {
        console.log("soy Silvia");
    });
    return eventoImage;

};

const showMessage = (index) => {
    if (index < firstPartMessages.length) {
        displayMessage(firstPartMessages[index]);
        setTimeout(() => {
            clearMessage();
            showMessage(index + 1);
        }, 1000);
    } else {
        secondPartMessages.forEach(message => {
            appendParagraph(message);
        });
        appendImage(!document.querySelector('#there img'));
    }
};

window.addEventListener("load", (event) => {
    showMessage(0);
});
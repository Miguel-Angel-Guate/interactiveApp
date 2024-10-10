const messages = [
    "Please hold, as we load up the best experience for you...",
    "Loading content, please wait...",
    "You're all set!",
    "Are you ready to connect with God?",
    "Turn the sound",
];

const firstPartMessages = messages.slice(0, 3);
const secondPartMessages = messages.slice(3);

const element = document.getElementById('there');
const getDivClassDynamic = document.getElementsByClassName('childDinamyc')

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

const toggleAudio = (audio, img) => {
    audio.paused ? (audio.play(), img.src = "./assets/no-sound.png") : (audio.pause(), img.src = "./assets/pause.png");
};

const appendImage = () => {
    const img = document.createElement("img");
    img.src = "./assets/spe.png";
    img.style.width = "80px";

    const imageElement = element.appendChild(img)
   /*  imageElement.style.backgroundColor = "black"; */
    const audio = new Audio("./assets/GodTime.mp3");
    imageElement.addEventListener("click", () => {
        toggleAudio(audio, imageElement);
        clearMessage();
       getDivClassDynamic[0].style.background = 'aqua'
        document.body.style.background = 'aqua';



    });
};

const show2PartesMessage = (index = 0) => {
    index < firstPartMessages.length ?
        (
            
            displayMessage(firstPartMessages[index]),
            setTimeout(() => {
                clearMessage();
                show2PartesMessage(index + 1);
            }, 2000)

        ) :
        (

            secondPartMessages.forEach(message => appendParagraph(message)),
            !document.querySelector('#there img') && appendImage()
        );
};


window.addEventListener("load", (event) => {
    show2PartesMessage();
});
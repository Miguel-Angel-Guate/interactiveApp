const messages = [
    "Please hold, as we load up the best experience for you...",
    "Loading content, please wait...",
    "You're all set!",
    "Are you ready to connect with God?",
    "Turn the sound",
];

const firstPartMessages = messages.slice(0, 3);
const secondPartMessages = messages.slice(3);
let audio;

const element = document.getElementById('there');
const getDivClassDynamic = document.getElementsByClassName('childDinamyc')
const getContainer = document.getElementsByClassName('container')[0]
console.log("🚀 ~ getContainer:", getContainer)

const playBar = (item) => {
    let result
    const divContentPlay = document.createElement('div')
    divContentPlay.classList.add('barClass')

    result = item.appendChild(divContentPlay)
    return result
}

/* const controlPlayBar = (audioItem, play, pause, reload) => {
    audioItem.play ? (

    )
} */

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

const createImage = (item, linkImage, widthImage, numberPx) => {
    let addingItem = document.createElement("img");
    addingItem.src = linkImage;
    addingItem.style.width = numberPx;
    return addingItem;
}


const appendImage = () => {
    /* const img = document.createElement("img");
    img.src = "./assets/spe.png";
    img.style.width = "80px";
    const speakerImage = "./assets/spe.png" */
    const item = document.getElementsByClassName("childDinamyc");
    const speakerImage = "./assets/spe.png";
    const widthImage = "80px";

    const imageElement = element.appendChild(createImage(item, speakerImage, widthImage, "80px"))
    /*  imageElement.style.backgroundColor = "black"; */
    audio = new Audio("./assets/GodTime.mp3");
    imageElement.addEventListener("click", () => {
        toggleAudio(audio, imageElement);
        clearMessage();
        getDivClassDynamic[0].style.background = 'aqua'
        document.body.style.background = 'aqua';
        console.log(getContainer.firstChild)
        playBar(getContainer)

    });
};

const show2PartesMessage = (index = 0) => {
    index < firstPartMessages.length ?
        (

            displayMessage(firstPartMessages[index]),
            setTimeout(() => {
                clearMessage();
                show2PartesMessage(index + 1);
            }, 1000)

        ) :
        (

            secondPartMessages.forEach(message => appendParagraph(message)),
            !document.querySelector('#there img') && appendImage()
        );
};


window.addEventListener("load", (event) => {
    show2PartesMessage();
});
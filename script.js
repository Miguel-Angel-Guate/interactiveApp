const messages = [
    "Please hold, as we load up the best experience for you...",
    "Loading content, please wait...",
    "You're all set!",
    "Are you ready to connect with God?",
    "Turn the sound",
];


const imagePlayBarContainer = {
    "pause": "assets/pause.png",
    "reload": "assets/reload.png",
    "play": "assets/play.png",
}

let getKeys = Object.entries(imagePlayBarContainer).map(([key, value]) => {
    return key + value;
});


let musicPlay = false

const firstPartMessages = messages.slice(0, 3);
const secondPartMessages = messages.slice(3);
let audio;

const element = document.getElementById('there');
const getDivClassDynamic = document.getElementsByClassName('childDinamyc')
const getContainer = document.getElementsByClassName('container')[0]


const playBarContainer = (item) => {
    let result
    const divContentPlay = document.createElement('div')
    divContentPlay.classList.add('playBarContainer')

    result = item.appendChild(divContentPlay)
    return result
}

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

const createImage = (srcImage, widthImage, height) => {
    let imageCreated;

    let createTagImage = document.createElement("img");
    createTagImage.src = srcImage;
    createTagImage.style.width = widthImage;
    createTagImage.style.height = height
    imageCreated = createTagImage

    return imageCreated
}


const playAudio = (audioElement) => {
    audioElement.play();
    toggleImages("pause", "play");
};

const pauseAudio = (audioElement) => {
    audioElement.pause();
    toggleImages("play", "pause");
};

const reloadAudio = (audioElement) => {
    audioElement.currentTime = 0;
};

const toggleImages = (showType, hideType) => {
    document.querySelector(`[data-type="${hideType}"]`).style.display = "none";
    document.querySelector(`[data-type="${showType}"]`).style.display = "inline";
};


const createImageWithListener = (imagesArray, widthImage, heightImage, audioElement) => {
    const actionMap = {
        "play": () => playAudio(audioElement),
        "pause": () => pauseAudio(audioElement),
        "reload": () => reloadAudio(audioElement)
    };

    imagesArray.forEach(imageObj => {

        const [type, srcImage] = imageObj;
        let createTagImage = createImage(srcImage, widthImage, heightImage)

        type === "play"  ? createTagImage.style.display = "none" : createTagImage.style.display = "inline";


        createTagImage.addEventListener('click', actionMap[type]);

        createTagImage.setAttribute('data-type', type);


        let playDivContainer = document.getElementsByClassName('playBarContainer');
        playDivContainer[0].appendChild(createTagImage)
    });
};


const renderImageAndOthersthing = () => {

    const srcImage = "./assets/spe.png";
    const widthImage = "80px";
    const pauseImage = "./assets/pause.png"
    const reloadImage = "./assets/reload.png"
    const imageElement = element.appendChild(createImage(srcImage, widthImage))
    audio = new Audio("./assets/GodTime.mp3");
    imageElement.addEventListener("click", () => {
        toggleAudio(audio, imageElement);
        clearMessage();
        musicPlay
        getDivClassDynamic[0].style.background = 'black'
        document.body.style.background = 'black';
        playBarContainer(getContainer)
        let playDivContainer = document.getElementsByClassName('playBarContainer');
        createImageWithListener(Object.entries(imagePlayBarContainer), "auto", "30px", audio);

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
            !document.querySelector('#there img') && renderImageAndOthersthing()
        );
};


window.addEventListener("load", (event) => {
    show2PartesMessage();
});
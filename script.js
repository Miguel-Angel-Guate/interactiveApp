const messages = [
    "Please hold, as we load up the best experience for you...",
    "Loading content, please wait...",
    "You're all set!",
    "Best Experience with the guys..",
    "Turn the sound on",
];

const  renderParts = (firstPartMessages, secondPartMessages) => {
    const element = document.getElementById('there');
    let currentIndex = 0;

    const showMessage = (index) => {
        if (index < firstPartMessages.length) {
            element.innerHTML = firstPartMessages[index];
            setTimeout(() => {
                element.innerHTML = "";
                showMessage(index + 1);
            }, 1000);
        } else {
            secondPartMessages.forEach(message => {
                const p = document.createElement('p');
                p.textContent = message;
                there.appendChild(p);
            });
        
            if (!document.querySelector('#there img')) {
                const img = document.createElement("img");
                img.src = "./assets/spe.png";
                img.style.width = "80px";
        
                const imageElement = there.appendChild(img);
        
                imageElement.addEventListener("click", () => {
                    console.log("soy Silvia");
                });
            }
        }
    };

    showMessage(currentIndex);
}

window.addEventListener("load", (event) => {
    const firstPartMessages = messages.slice(0, 3);
    const secondPartMessages = messages.slice(3);
    renderParts(firstPartMessages, secondPartMessages);
});


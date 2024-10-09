const messages = [
    "Please hold, as we load up the best experience for you...",
    "Loading content, please wait...",
    "You're all set!",
    "Best Experience with Angel",
    "Turn the sound on",
];


window.addEventListener("load", (event) => {

    let currentIndex = 0;

    const showMessage = (index) => {
        if (index < messages.length) {
            document.getElementById('there').innerHTML = messages[index];
            if (index >= messages.length - 1) {
                const img = document.createElement("img");
                img.src = "./assets/spe.png";
                img.style.width = "80px";

                const imageElement = document.getElementById('there').appendChild(img);

                imageElement.addEventListener("click", () => {
                    console.log("clicked");
                });

                return
            }
            setTimeout(() => {
                document.getElementById('there').innerHTML = "";

                showMessage(index + 1);
            }, 1000);
        }
    }

    setTimeout(() => {
        showMessage(currentIndex);
    }, 1000);
});
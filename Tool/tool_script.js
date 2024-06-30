document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const buttons = document.getElementById("buttons");
    const budgetButton = document.getElementById("budgetButton");
    const budgetDropdown = document.getElementById("budgetDropdown");
    const budgetInput = document.getElementById("budgetInput");
    const budgetWarning = document.getElementById("budgetWarning");
    const usageButton = document.getElementById("usageButton");
    const usageDropdown = document.getElementById("usageDropdown");
    const usageSelect = document.getElementById("usageSelect");
    const resolutionButton = document.getElementById("resolutionButton");
    const resolutionDropdown = document.getElementById("resolutionDropdown");
    const resolutionSelect = document.getElementById("resolutionSelect");
    const goButton = document.getElementById("goButton");
    const loading = document.getElementById("loading");
    const productCard = document.getElementById("productCard");
    const orderButton = document.getElementById("orderButton");
    const footer = document.querySelector('.footer');
    const socialBox = document.getElementById("socialBox");
    const cameraButton = document.getElementById("camera-button");

    // Animazione di digitazione
    const text = 'GENERA LA TUA BUILD PERSONALIZZATA IN POCHI SECONDI';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            subtitle.innerHTML = text.substring(0, index + 1) + '<span class="typing-cursor"></span>';
            index++;
            setTimeout(typeWriter, 100);
        } else {
            subtitle.innerHTML = text;
        }
    }

    setTimeout(() => {
        title.classList.remove("hidden");
        title.classList.add("appear");
        setTimeout(() => {
            subtitle.classList.remove("hidden");
            subtitle.classList.add("appear");
            typeWriter();
            setTimeout(() => {
                buttons.classList.remove("hidden");
                buttons.classList.add("appear");
                // Mostra il socialBox dopo le altre animazioni
                setTimeout(() => {
                    socialBox.classList.remove("hidden");
                    socialBox.classList.add("visible");
                }, 500); // Tempo da adattare in base alle tue animazioni
            }, 1200);
        }, 1200);
    }, 500);

    budgetButton.addEventListener("click", () => {
        budgetDropdown.classList.toggle("hidden");
    });

    usageButton.addEventListener("click", () => {
        usageDropdown.classList.toggle("hidden");
    });

    resolutionButton.addEventListener("click", () => {
        resolutionDropdown.classList.toggle("hidden");
    });

    const validateBudget = () => {
        const budgetValue = budgetInput.value;
        if (budgetValue && budgetValue >= 550 && Number.isInteger(Number(budgetValue))) {
            budgetWarning.classList.add("hidden");
            return true;
        } else {
            budgetWarning.classList.remove("hidden");
            return false;
        }
    };

    const checkFormValidity = () => {
        if (validateBudget() && usageSelect.value && resolutionSelect.value) {
            goButton.classList.remove("disabled");
            goButton.disabled = false;
        } else {
            goButton.classList.add("disabled");
            goButton.disabled = true;
        }
    };

    budgetInput.addEventListener("input", () => {
        validateBudget();
        checkFormValidity();
    });

    usageSelect.addEventListener("change", checkFormValidity);
    resolutionSelect.addEventListener("change", checkFormValidity);

    goButton.addEventListener("click", () => {
        if (!loading.classList.contains("visible")) {
            loading.classList.remove("hidden");
            loading.classList.add("visible");
        }
        goButton.disabled = true;
        setTimeout(() => {
            loading.classList.remove("visible");
            loading.classList.add("hidden");
            productCard.classList.add("visible");
            goButton.disabled = false;
            orderButton.classList.remove("hidden");
            footer.classList.remove("hidden");
            alert("Build generata!");
        }, 3000);
    });

    const observer = new MutationObserver(checkFormValidity);
    observer.observe(budgetInput, { attributes: true, childList: true, subtree: true });
    observer.observe(usageSelect, { attributes: true, childList: true, subtree: true });
    observer.observe(resolutionSelect, { attributes: true, childList: true, subtree: true });

    // Event listener per il pulsante "ORDINA ORA"
    orderButton.addEventListener('click', function() {
        const discordUrl = 'https://discord.gg/FzpDyDcb';
        window.open(discordUrl, '_blank');
    });

    // Event listener per il pulsante Instagram
    const instagramButton = document.querySelector('.social-button.instagram');
    instagramButton.addEventListener('click', function(event) {
        event.preventDefault();
        const instagramUrl = 'https://www.instagram.com/prime_build_/';
        window.open(instagramUrl, '_blank');
    });

    // Funzione per catturare lo screenshot
    function captureScreenshot() {
        html2canvas(document.querySelector('#productCard')).then(canvas => {
            canvas.toBlob(function(blob) {
                let link = document.createElement('a');
                link.download = 'screenshot.jpg';
                link.href = URL.createObjectURL(blob);
                link.click();
            }, 'image/jpeg');
        });
    }

    cameraButton.addEventListener("click", captureScreenshot);

    title.addEventListener("mouseover", () => {
        title.classList.add("hover");
    });

    title.addEventListener("mouseout", () => {
        title.classList.remove("hover");
    });
});

const textarea = document.getElementById("textarea");
const container = document.getElementById("suggestions_container");
const suggestionsCount = document.getElementById("suggestions_count");

textarea.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
        addSuggestionToDOM(evt.target.value.trim());
        setTimeout(() => {
            textarea.value = "";
        }, 10);
    }
});

function addSuggestionToDOM(suggestionText) {
    const newSuggestion = document.createElement("div");
    newSuggestion.classList.add("suggestion");
    newSuggestion.innerHTML = `
        <div class="left">
            <button class="vote-btn">
                <i class="fas fa-chevron-up"></i>
            </button>
            <p>
                <span class="votes">0</span>
                votes
            </p>
        </div>
        <div class="right">
            <strong>${suggestionText}</strong>
        </div>
    `;
    container.appendChild(newSuggestion);

    suggestionsCount.innerText = String(Number(suggestionsCount.innerText) + 1);
}

container.addEventListener("click", (evt) => {
    const btn = evt.path.find((element) => element.classList && element.classList.contains("vote-btn"));

    if (btn) {
        const suggestionElement = evt.path.find((element) => element.classList && element.classList.contains("suggestion"));

        if (btn.classList.contains("voted")) {
            btn.classList.remove("voted");
            unvoteFor(suggestionElement);
        } else {
            btn.classList.add("voted");
            voteFor(suggestionElement);
        }
    }
});

function voteFor(element) {
    const voteElement = element.querySelector(".votes");
    voteElement.innerText = String(Number(voteElement.innerText) + 1);
}

function unvoteFor(element) {
    const unvoteElement = element.querySelector(".votes");
    unvoteElement.innerText = String(Number(unvoteElement.innerText) - 1);
}

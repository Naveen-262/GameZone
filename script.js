
const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");
const gameDetails = document.getElementById("gameDetails");
const noResults = document.getElementById("noResults");

const detailName = document.getElementById("detailName");
const detailDescription = document.getElementById("detailDescription");
const detailCategory = document.getElementById("detailCategory");
const closeDetails = document.getElementById("closeDetails");

// Search games by name or category
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleGames = 0;

    gameCards.forEach(function (card) {
        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        const matches =
            name.includes(searchText) ||
            category.includes(searchText);

        card.hidden = !matches;

        if (matches) {
            visibleGames++;
        }
    });

    noResults.hidden = visibleGames !== 0;
    gameDetails.hidden = true;
});

// Show game information when a card is clicked
gameCards.forEach(function (card) {
    card.addEventListener("click", function (event) {
        const name = card.dataset.name;
        const description = card.dataset.description;
        const category = card.dataset.category;

        detailName.textContent = name;
        detailDescription.textContent = description;
        detailCategory.textContent = category;

        gameDetails.hidden = false;

        // Play button interaction
        if (event.target.closest(".play-button")) {
            alert("Game is starting...");
        }

        gameDetails.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
});

// Close the game details section
closeDetails.addEventListener("click", function () {
    gameDetails.hidden = true;
});
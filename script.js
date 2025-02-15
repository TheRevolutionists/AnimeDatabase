// Samurai Anime Database
const animeDatabase = {
    "Kimi wa Meido-sama - Season 1": {
        episodesWatched: 12,
        totalEpisodes: 12,
        status: "Completed",
        genre: "",
        rating: 8,
        notes: "Waiting for season 2!"
    },
    "Kaifuku Jutsushi no Yarinaoshi - Season 1": {
        episodesWatched: 4,
        totalEpisodes: 12,
        status: "Watching",
        genre: "",
        rating: 5,
        notes: "NA"
    },
    "Solo Leveling Season 2: Arise from the Shadow": {
        episodesWatched: 7,
        totalEpisodes: 7,
        status: "Watching",
        genre: "",
        rating: 5,
        notes: "NA"
    },
};

function searchAnime() {
    const searchValue = document.getElementById("searchBox").value.toLowerCase();
    const animeContainer = document.getElementById("anime-container");
    
    animeContainer.innerHTML = ""; // Clear previous results

    for (let title in animeDatabase) {
        if (title.toLowerCase().includes(searchValue)) {
            let anime = animeDatabase[title];
            let progress = (anime.episodesWatched / anime.totalEpisodes) * 100;

            let animeCard = document.createElement("div");
            animeCard.classList.add("anime-card");

            animeCard.innerHTML = `
                <h2>${title}</h2>
                <p>📺 Episodes Watched: ${anime.episodesWatched} / ${anime.totalEpisodes} (${progress.toFixed(2)}%)</p>
                <p>📜 Status: ${anime.status}</p>
                <p>🏮 Genre: ${anime.genre}</p>
                <p>⭐ Rating: ${anime.rating}/10</p>
                <p>📝 Notes: ${anime.notes}</p>
            `;

            animeContainer.appendChild(animeCard);
        }
    }

    if (animeContainer.innerHTML === "") {
        animeContainer.innerHTML = `<p>❌ No matching anime found.</p>`;
    }
}

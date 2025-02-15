// Samurai Anime Database
const animeDatabase = {
    "Attack on Titan": {
        episodesWatched: 75,
        totalEpisodes: 87,
        status: "Watching",
        genre: "Action, Drama, Fantasy",
        rating: 9.5,
        notes: "Waiting for the Final Season Part 3!"
    },
    "Naruto": {
        episodesWatched: 220,
        totalEpisodes: 220,
        status: "Completed",
        genre: "Action, Adventure",
        rating: 9.0,
        notes: "Classic! But didn't watch all fillers."
    },
    "One Piece": {
        episodesWatched: 1050,
        totalEpisodes: 1100, 
        status: "Watching",
        genre: "Adventure, Comedy",
        rating: 9.8,
        notes: "Still catching up!"
    }
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

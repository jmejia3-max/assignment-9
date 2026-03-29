console.log("script.js loaded");

const gifContainer = document.getElementById("gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

const API_KEY = "";

fetchBtn.addEventListener("click", async () => {
    
    // Clear previous GIFs
    gifContainer.innerHTML = "";

    // Get search term
    const searchTerm = searchInput.value;

    try {
        // Fetch data from Giphy
        const response = await fetch(`${API_KEY}&q=${searchTerm}&limit=12`);
        const data = await response.json();

        const images = data.data;

        // Loop through GIFs
        images.forEach(gif => {
            const imageUrl = gif.images.fixed_height.url;

            gifContainer.innerHTML += `
                <img src="${imageUrl}" class="col-3 mb-3">
            `;
        });

    } catch (error) {
        console.error("Error fetching GIFs:", error);
    }
});
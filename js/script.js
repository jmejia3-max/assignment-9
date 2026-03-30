console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");


const API_KEY = "j9Y4xNzJ3w1K4bOA9A4CbCSqjzbbleZh";
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=dog&limit=12";

fetchBtn.addEventListener("click", async () => {

    
    gifContainer.innerHTML = "";

    
    const searchTerm = searchInput.value;

   
    endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=12`;

    try {
        
        const response = await fetch(endpoint);
        const data = await response.json();

        
        const images = data.data;

        console.log(images); 
        for (let i = 0; i < images.length; i++) {
            const imageUrl = images[i].images.original.url;

            gifContainer.innerHTML += `
                <img src="${imageUrl}" class="col-3 mb-3">
            `;
        }

    } catch (error) {
        console.error("Error fetching GIFs:", error);
    }
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        fetchBtn.click();
    }
});
const fetchRecipe = async()=>{
const input = document.getElementById("searchInput").value;

const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${input}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1df45be1amsh1bc437d03642a5bp1cf42djsnf14e3b6f935e',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
	}
};

const displayResults = (recipes) =>{
    const dataContainer = document.querySelector(".data");
    dataContainer.innerHTML = '';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    recipes.forEach((recipe) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${recipe.Image}" alt="">
            <div class="card-content">
                <h3>${recipe.Title}</h3>
                <p>${recipe.Instructions}</p>
                <button class="read-more-btn" onclick="moreDetails(this)">See Recipe</button>
                <button class="read-less-btn" onclick="lessDetails(this)">Close Recipe</button>

            </div>
        `;
        cardContainer.appendChild(card);

      
    });

    dataContainer.appendChild(cardContainer);
   
    
  
}

try {
	const response = await fetch(url, options);
	const result = await response.json();
	displayResults(result.d);
} catch (error) {
	console.error(error);
}


}

const moreDetails = (clickedButton) => {
    const cardContent = clickedButton.parentElement;
    const details = cardContent.querySelector("p");
    const readLess = cardContent.querySelector(".read-less-btn");
    const readMore = cardContent.querySelector(".read-more-btn");

    details.style.display = "block";
    readLess.style.display = "block";
    readMore.style.display = "none";
};


const lessDetails = (clickedButton) => {
    const cardContent = clickedButton.parentElement;
    const details = cardContent.querySelector("p");
    const readLess = cardContent.querySelector(".read-less-btn");
    const readMore = cardContent.querySelector(".read-more-btn");

    details.style.display = "none";
    readLess.style.display = "none";
    readMore.style.display = "block";
};


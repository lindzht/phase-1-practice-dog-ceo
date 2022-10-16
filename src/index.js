console.log('%c HI', 'color: firebrick')

const dogImageContainer = document.querySelector("#dog-image-container");

//CHALLENGE 1:
// 1. on page load, fetches the images using the url: 
// 2. parses the response as JSON
// 3. adds image elements to the DOM for each image in the array


//on page load initiates program:
document.addEventListener("DOMContentLoaded", () => {
    // fetchDataChallenge1();
    fetchDataChallenge2();

})

//fetches data and appends to DOM
function fetchDataChallenge1 (){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(breedFour => {
        const breedImages = breedFour.message;
        //finding an individual image in object:
        // console.log(breedFour.message[0]);
        breedImages.forEach(img => {
            const dogImageContainer = document.querySelector("#dog-image-container");

            const breedImg = document.createElement('img');
            breedImg.src = `${img}`;
            // console.log(breedImg);

            dogImageContainer.appendChild(breedImg);
        })
    })
}

// CHALLENGE 2: After the first challenge is completed, add JavaScript that:
// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

function fetchDataChallenge2 (){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(allBreeds => {
        const dogBreedsList = allBreeds.message;
        // console.log(dogBreedsList);
        for (let key in dogBreedsList){
            // console.log(key);
            const ul = document.querySelector("#dog-breeds");
            const li = document.createElement('li');
            li.textContent = key;
            ul.append(li);
        }

        // dogBreedsList.forEach(breed => {
        //     const ul = document.querySelector("#dog-breeds");
        //     const li = document.createElement('li');
        //     li.textContent = `${breed}`;

        //     ul.append(li);
        // });
    })
}
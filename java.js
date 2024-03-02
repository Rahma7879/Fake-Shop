// Getttttt
const url = "https://fakestoreapi.com/products"
let xhr = new XMLHttpRequest()
let photos ;

xhr.open('GET', url)
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.send();
xhr.onload = function () {
if(xhr.status === 200) {
console.log("photo successfully fetched!")
photos = JSON.parse(xhr.responseText);
createCards(photos.slice(0, 20));


}
else
{
console.log('error happened')
}
}

function createCards(photos) {
    
    const cardContainer = document.getElementById("cardContainer");
      if (!cardContainer) {
        console.error("cardContainer element not found!");
        return; // Exit function if cardContainer is not found
    }
    photos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'card m-2';
        card.style = 'width: 18rem;';

        const cardImage = document.createElement('img');
        cardImage.src = photo.image; // Assuming the photo object has a 'url' property
        cardImage.className = 'card-img-top';
        cardImage.alt = 'Card Image';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = photo.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = `ID: ${photo.id}`;
 
        const cardButton = document.createElement('div');
        cardButton.className = 'card-button'; 
       
        const buttonUpdate = document.createElement('button');
        buttonUpdate.className = 'button-update';
        buttonUpdate.textContent="Eidt"
        buttonUpdate.addEventListener('click',function(){
            location.href = `index.html?id=${photo.id}`;
            
          });
        //  ------------------------------------------------------------------------------   
        const buttonDelete = document.createElement('button');
        buttonDelete.className = 'button-delete';
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click',function()
        {const confirmation = confirm('Are you sure you want to delete this photo?');
            if (confirmation) 
            {  console.log("Done");
                  cardContainer.removeChild(card);
            }     

            else
            {
                    console.log("You pressed Cancel");
            }
        })
    // --------------------------------------------------------------------------------------------
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardButton);
       
        cardButton.appendChild(buttonDelete);
        cardButton.appendChild(buttonUpdate);

        card.appendChild(cardImage);
        card.appendChild(cardBody);

        cardContainer.appendChild(card);
       
        
      })
    
    }
       
    
    




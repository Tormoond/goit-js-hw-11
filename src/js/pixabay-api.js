import iziToast from  "izitoast" ;
import "izitoast/dist/css/iziToast.min.css";
import { displayImages, clearImages } from "./render-functions";



const apiKey = '44406774-b6929e0ee65f9835201f12742';
export default function getImages(apiKey, userInput) {
    const BASE_URL = 'https://pixabay.com/';
    const END_POINT = 'api/';
    const params = new URLSearchParams({
        key: apiKey,
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true

    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    
    showLoader();
   
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                clearImages();
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                displayImages(data.hits);
            };
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching images. Please try again!',
            }).finally(() => {
                hideLoader();
            });
        });
        
}

const loader = document.querySelector('.loader');
function showLoader() {
  loader.classList.remove('hidden')  
}

function hideLoader() {
   loader.classList.add('hidden') 
}
 
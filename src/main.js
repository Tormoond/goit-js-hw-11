
import getImages from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const apiKey = '44406774-b6929e0ee65f9835201f12742';

const searchForm = document.querySelector('form');

searchForm.style.display = 'flex';
searchForm.style.justifyContent = 'center';
searchForm.style.gap = '8px';
searchForm.style.height = '40px';
searchForm.style.width = '371px';
searchForm.style.margin = '0 auto';
searchForm.style.fontFamily = 'Montserrat';
searchForm.style.fontSize = '16px';


const searchInput = document.querySelector('input');

searchInput.style.width = '272px';
searchInput.style.paddingLeft = '16px';
searchInput.style.border = '1px solid #808080';
searchInput.style.borderRadius = '4px';
searchInput.style.color = '#808080';


const searchButton = document.querySelector('button');

searchButton.style.width = '91px';
searchButton.style.padding = '0px';
searchButton.style.backgroundColor = '#4E75FF';
searchButton.style.border = 'none';
searchButton.style.borderRadius = '8px';
searchButton.style.color = '#FFFFFF';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('input[type="text"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input.value.trim() === '') {
            
            iziToast.error({
                title: 'Error',
                message: 'Поле пошуку не може бути порожнім',
            });
        
        } else {
            getImages(apiKey, input.value)
              .then(() => {
                    input.value = ''; 
                })
                .catch(error => {
                    iziToast.error({
                        title: 'Error',
                        message: 'An error occurred while fetching images. Please try again!',
                    });
                    console.error('Error fetching images:', error);
                });
        }
    });

});
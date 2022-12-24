(function () {
    let links = document.querySelectorAll('.tab');
    let imagesCollection = document.querySelectorAll('.data');

    function displayImage(imgs, tab) {
       
        imgs.forEach((image) => {
            if (image.dataset.tab == tab) {
          
                image.classList.remove('hide');
            } else {
              
                image.classList.add('hide');
            }
        });
    }


    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            switch (link.textContent) {
                case "A":

                    displayImage(imagesCollection, 'A');
                    break;
                case "B":

                    displayImage(imagesCollection, 'B');

                    break;
                case "C":

                    displayImage(imagesCollection, 'C');
                    break;
                case "D":

                    displayImage(imagesCollection, 'D');
                    break;

                case "":

                    imagesCollection.forEach((image) => {
                        image.classList.remove('hide');
                    });

                    break;
            }

        });
    });

})();



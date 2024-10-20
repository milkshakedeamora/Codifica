
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});
function loadProducts() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            const productContainer = document.querySelector('.produtos-container');
            data.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.classList.add('produto-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Preço: ${product.price}</p>
                    <div class="size-buttons"></div>
                    <p class="stock-info"></p>
                `;
                const sizeButtonsContainer = productCard.querySelector('.size-buttons');
                product.sizes.forEach(sizeInfo => {
                    const sizeButton = document.createElement('button');
                    sizeButton.textContent = sizeInfo.size;
                    sizeButton.disabled = sizeInfo.stock === 0; 
                    sizeButton.style.backgroundColor = sizeInfo.stock === 0 ? 'gray' : ''; 
                    sizeButton.addEventListener('click', () => {
                        const stockInfo = productCard.querySelector('.stock-info');
                        if (sizeInfo.stock > 1) {
                            stockInfo.textContent = `Estoque: ${sizeInfo.stock} unidades`;
                        } else if (sizeInfo.stock === 1) {
                            stockInfo.textContent = `Última unidade`;
                        }
                    });

                    sizeButtonsContainer.appendChild(sizeButton);
                });

                productContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadProducts);

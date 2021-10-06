var products = [];

for (var i = 0; i < 8; i++) {
  products.push({
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: '12.345,00'
  })
}

function createProduct(product) {
  const productContainer = document.createElement('div');
  productContainer.className = 'product';

  const productImg = document.createElement('img');
  productImg.id = 'img';
  productImg.src = product.img;
  productImg.alt = 'product';

  const productTitle = document.createElement('p');
  productTitle.id = 'productTitle';
  productTitle.textContent = product.title;

  const productBrand = document.createElement('p');
  productBrand.textContent = product.brand;

  const productPrice = document.createElement('p');
  productPrice.id = 'price';
  productPrice.textContent = `$ ${product.price}`;

  const productBtn = document.createElement('button');
  productBtn.id = 'productBtn';
  productBtn.textContent = 'COMPRAR';

  productContainer.appendChild(productImg);
  productContainer.appendChild(productTitle);
  productContainer.appendChild(productBrand);
  productContainer.appendChild(productPrice);
  productContainer.appendChild(productBtn);

  return productContainer;
}

const productContainer = document.querySelector('.product-container');
const sidebar = document.getElementById('sidebar');

const button2 = document.getElementById('btn-2');
const button4 = document.getElementById('btn-4');

button2.addEventListener('click', () => productContainer.style.display = 'none');
button4.addEventListener('click', () => sidebar.innerHTML = 'Hola Mundo!');

function mapProducts(products) {
  return products.map(createProduct);
}

function displayProducts() {
  const productsContainer = document.querySelector('.product-container');

  const arrayProducts = mapProducts(products);
  arrayProducts.forEach((product) => productsContainer.appendChild(product));
}

displayProducts();

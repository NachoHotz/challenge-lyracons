var products = [
  {
    id: 1,
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: 1234500,
  },
  {
    id: 2,
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: 1234500,
  },
  {
    id: 3,
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: 1234500,
  },
  {
    id: 4,
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: 1234500,
  },
  {
    id: 5,
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: 1234500,
  },
  {
    id: 6,
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: 1234500,
  },
  {
    id: 7,
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: 1234500,
  },
  {
    id: 8,
    title: 'Título de producto',
    img: '',
    brand: 'Marca',
    price: 1234500,
  },
];

function createProduct(product) {
  const productContainer = document.createElement('div');
  productContainer.className = 'product';

  const productImg = document.createElement('img');
  productImg.id = 'img';
  productImg.src = product.img;
  productImg.alt = 'product';

  const productTitle = document.createElement('h5');
  productTitle.textContent = product.title;

  const productBrand = document.createElement('p');
  productBrand.textContent = product.brand;

  const productPrice = document.createElement('p');
  productPrice.id = 'price';
  productPrice.textContent = `$ ${product.price}`;

  productContainer.appendChild(productImg);
  productContainer.appendChild(productTitle);
  productContainer.appendChild(productBrand);
  productContainer.appendChild(productPrice);

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

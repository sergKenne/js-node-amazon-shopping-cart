import axios from 'axios';
const HomeScreen = {
    render: async () => {
        const response = await axios.get('http://localhost:5000/api/products');
        if(!response || response.statusText !== "OK") {
            return `<div>Error in getting data</div>`;
        }
        const products = response.data;

        return `<ul class="products">
            ${products.map( product => {
                return `<li class="product products__item">
                        <a href="/#/product/${product._id}" class="product__image">
                            <img src="${product.image}" alt="${product.name}" class="product__picture">
                        </a>
                        <div class="product__body">
                            <a href="/#/product/${product._id}" class="product__name">${product.name}</a>
                            <div class="product__brand">${product.brand}</div>
                            <div class="product__price">$${product.price}</div>
                        </div>
                    </li>`;
            }).join("")}
        </ul>`
    }
}

export default HomeScreen;
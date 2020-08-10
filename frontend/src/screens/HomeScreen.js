//import data from "../data.js";

const HomeScreen = {
    render: async () => {

        const response = await fetch('http://localhost:5000/api/products',{
            headers: {
                'content-type': 'application/json'
            }
        });

        if(!response || !response.ok) {
            return `<div>Error in getting data</div>`
        }

        const products = await response.json();

        //const data = await response.json();
        //const {products} = data;
        //const products = await data.products;
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
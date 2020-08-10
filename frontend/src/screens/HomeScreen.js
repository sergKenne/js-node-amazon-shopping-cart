import data from "../data.js";

const HomeScreen = {
    render: () => {
        const {products} = data;
        return `<ul class="products">
            ${products.map( product => {
                return `<li class="product products__item">
                        <a href="#" class="product__image">
                            <img src="${product.image}" alt="${product.name}" class="product__picture">
                        </a>
                        <div class="product__body">
                            <a href="" class="product__name">${product.name}</a>
                            <div class="product__brand">${product.brand}</div>
                            <div class="product__price">$${product.price}</div>
                        </div>
                    </li>`;
            }).join("")}
        </ul>`
    }
}

export default HomeScreen;
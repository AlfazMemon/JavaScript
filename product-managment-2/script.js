const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        name: "iPhone 15",
        category: "Electronics",
        price: 79999,
        description: "Apple iPhone 15 with A16 Bionic chip, 128GB storage, and advanced dual-camera system."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        name: "Nike Air Max",
        category: "Footwear",
        price: 4999,
        description: "Comfortable and stylish running shoes with Air Max cushioning technology."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        name: "Sony WH-1000XM5",
        category: "Electronics",
        price: 24999,
        description: "Premium wireless headphones featuring industry-leading noise cancellation."
    }
];

const DisplayProduct = () =>{

    let productTable = document.getElementById('productTable');
    productTable.innerHTML = "";

    products.forEach((product) =>{

        productTable.innerHTML += 
        `<tr>
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="" width ="100px"></td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>
            <button>Edit</button>
            <button>Delete</button>
            </td>
        </tr>`;

            

    });
    
}

DisplayProduct();


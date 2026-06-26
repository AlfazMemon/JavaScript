const products = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4VkTAvmhqHoIXaNSldpnWziFzsOYBhMBnclYxdNzFg&s=10",
        name: "iPhone 15",
        category: "Electronics",
        price: 79999,
        description: "Apple iPhone 15 with A16 Bionic chip, 128GB storage, and advanced dual-camera system."
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6osyEiHiqKFSrpOx_H2ZnQRJO-UsOeSxmyY8vBf_4g&s=10",
        name: "Nike Air Max",
        category: "Footwear",
        price: 4999,
        description: "Comfortable and stylish running shoes with Air Max cushioning technology."
    },
    {
        id: 3,
        image: "data:image/jpeg;base64,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",
        name: "Sony WH-1000XM5",
        category: "Electronics",
        price: 24999,
        description: "Premium wireless headphones featuring industry-leading noise cancellation."
    }
];

    h2 = document.getElementById('h2');
const DisplayProduct = () => {

    let productTable = document.getElementById('productTable');
    productTable.innerHTML = "";

    products.forEach((product) => {

        productTable.innerHTML +=
            `<tr class="card">
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="" width ="100px"></td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td>₹${product.price}</td>
            <td>
            <button onclick="EditProduct(${product.id})">Edit</button>
            <button onclick="DeleteProduct(${product.id})" id="del">Delete</button>
            </td>
        </tr>`;



    });

}

let editid = "";
const addProduct = () => {

    let name = document.getElementById('Name').value;
    let description = document.getElementById('Description').value;
    let category = document.getElementById('Category').value;
    let price = document.getElementById('Price').value;
    let image = document.getElementById('Image').value;
    document.getElementById('editbtn').innerText = "Update Product";

    if (editid) {
        const product = products.find((p) => p.id === editid);

        product.name = name;
        product.description = description;
        product.category = category;
        product.price = price;
        product.image = image;

        alert("Product Updated Succefully");


        editid = "";

        DisplayProduct();

        clear();



    }

    else {

        if(name == "" || description =="" || category == "" || price == "" || image ==""){
            alert("Please Fill All Fields");
            clear();
            
        }
        else{
            let NewProduct = {
            id: products.length + 1,
            name,
            description,
            category,
            price,
            image
        }

        products.push(NewProduct);

        DisplayProduct();
        clear();
        }
    }

}

const EditProduct = (id) => {
    const product = products.find((p) => p.id === id);

    editid = product.id;
    h2.innerHTML = "Update Product here";
    document.getElementById('Name').value = product.name;
    document.getElementById('Description').value = product.description;
    document.getElementById('Category').value = product.category;
    document.getElementById('Price').value = product.price;
    document.getElementById('Image').value = product.image;
    document.getElementById('editbtn').innerText = "Update Product";



}

const DeleteProduct = (id) => {
    const index = products.findIndex((idx) => idx.id === id);

    let result = confirm("Are you sure ? you wanted to delete this product");

    if (result) {
        products.splice(index, 1);
        DisplayProduct();
        alert("Product Deleted Successfully")
    }

}

const clear = () => {
        h2.innerHTML = "Add Product here";
    let name = document.getElementById('Name').value = "";
    let description = document.getElementById('Description').value = "";
    let category = document.getElementById('Category').value = "";
    let price = document.getElementById('Price').value = "";
    let image = document.getElementById('Image').value = "";
    document.getElementById('editbtn').innerText = "Add Product";

}

DisplayProduct();


let balance = document.getElementById('balance');
let income = document.getElementById('income');
let expense = document.getElementById('expense');
let transactionList = document.getElementById('transactionList');
let editIndex = null;

let arr = JSON.parse(localStorage.getItem("Data")) || [];

window.addEventListener('load', () => {
    Display(arr);
})


let form = document.getElementById('expenseForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = document.getElementById('title').value.trim();
    let amount = Number(document.getElementById('amount').value);
    let type = document.getElementById('type').value;

    const data = {
        title,
        amount,
        type
    }



    if (title === "" || amount <= 0) {
        alert("Please enter valid title and amount");
        return;
    }


    if (editIndex === null) {
        arr.push(data);
    }
     
    else {
        arr[editIndex] = data;
        editIndex = null;

        document.querySelector("#expenseForm button").innerText = "Add Transaction";
    }


    localStorage.setItem("Data", JSON.stringify(arr));

    Display();

    form.reset();

})

function Display(data = arr) {

    transactionList.innerHTML = ""

    let totalincome = 0;
    let totalexpense = 0;

    data.forEach((ele, index) => {



        if (ele.type === "income") {
            totalincome += ele.amount;
        }

        else {
            totalexpense += ele.amount;
        }

        let store = `
        <div class="box">
            <h3>${ele.title}</h3>
            <h3>₹${ele.amount}</h3>
            <h3>${ele.type}</h3>
            <button onclick="Edit(${index})" class="edit">Edit</button>
            <button onclick="Delete(${index})" class="delete">Delete</button>
            
        </div>`

        transactionList.innerHTML += store;
    })

    console.log("Income:", totalincome);
    console.log("Expense:", totalexpense);
    console.log("Balance:", totalincome - totalexpense);

    income.innerText = `₹${totalincome}`;
    expense.innerText = `₹${totalexpense}`;
    balance.innerText = `₹${totalincome - totalexpense}`;



}

function Delete(index) {

    arr.splice(index, 1);

    localStorage.setItem("Data", JSON.stringify(arr));
    Display();
}

function Search() {

    let searchValue = document.getElementById('search').value.toLowerCase();

    if(searchValue === ""){
        Display();
        return;
    }

    else{

    let filterdata = arr.filter((el) => el.title.toLowerCase().includes(searchValue))
    }
    Display(filterdata);

}

function Edit(index) {

    let transaction = arr[index];

    document.getElementById('title').value = transaction.title;
    document.getElementById('amount').value = transaction.amount;
    document.getElementById('type').value = transaction.type;

    editIndex = index

    document.querySelector("#expenseForm button").innerText = "Update Transaction";


}



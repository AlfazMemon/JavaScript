let form = document.getElementById('form');

let arr = JSON.parse(localStorage.getItem('Data')) || [];

window.addEventListener('load',()=>{
    DisplayTask(arr);
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let task = document.getElementById('task').value;
    let priority = document.getElementById('priority').value;

    let Data = {
        task,
        priority
    }

    arr.push(Data);

    localStorage.setItem('Data',JSON.stringify(arr));

    DisplayTask(arr);
})

function DisplayTask(arr){

        document.querySelector('tbody').innerHTML = "";

        
    arr.forEach((Ele,index)=>{

        let row = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.innerText = Ele.task;

        let td2 = document.createElement('td');
        td2.innerText = Ele.priority;
        let td3 = document.createElement('td');
        let btn = document.createElement('button');
        btn.innerText = ' Delete';

        btn.addEventListener('click', () => {
            DeleteTask(index);
        });
        

        td3.append(btn);
        row.append(td1,td2,td3);

        document.querySelector('tbody').append(row);
    })
    
}
function DeleteTask(index){
    arr.splice(index,1);

    localStorage.setItem('Data',JSON.stringify(arr));
    DisplayTask(arr);
}

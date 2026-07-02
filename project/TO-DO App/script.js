let form = document.getElementById('form');


form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let task = document.getElementById('task').value;
    let priority = document.getElementById('priority').value;

    let Data = {
        task,
        priority
    }

    let tbody = document.getElementById('tbody');

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let button = document.createElement('button');

    td1.innerText = Data.task;
    td2.innerText = Data.priority;
    button.innerText = 'Delete';
    td3.append(button);

    button.addEventListener('click',()=>{
        tr.remove();
    })

    tr.append(td1,td2,td3);

    tbody.append(tr);
    
    form.reset();

})
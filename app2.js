fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(usersData => displayUser(usersData))


// function usersData(){

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(usersData => displayUser(usersData))

// }

function displayUser(usersData){
    const userList = document.getElementById('user-list');
    for (const singleData of usersData) {
        console.log(singleData.name);
        const li = document.createElement('li');
        li.style.fontSize = '22px';
        li.style.padding = '10px';
        li.style.margin = '10px';
        li.style.borderRadius = '10px';
        li.style.border = '1px solid black';
        li.innerText = singleData.name;
        userList.appendChild(li);
    }
}
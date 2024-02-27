
function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
}


function usersData(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(usersData => displayUser(usersData))

}

function displayUser(usersData){
    
    for (const singleData of usersData) {
        console.log(singleData.name);
    }
}
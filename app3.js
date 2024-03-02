
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => displayPost(json))




function displayPost(data){

    const postContainer = document.getElementById('post-container');
    for (const post of data) {
        console.log(post);
       
        // const h3 = document.createElement('h3');
        // h3.innerText = post.title;
        // postContainer.appendChild(h3);

        
        // const p = document.createElement('p');
        // p.innerText = post.body;
        // postContainer.appendChild(p);
        
        
        const div = document.createElement('div');
        div.classList.add('style');
        div.innerHTML = `
        <h2> ${post.title} </h2>
        <p> ${post.body} </p>
        ` ;
        postContainer.appendChild(div);
        
    }
}

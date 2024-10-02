function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(data){
    const postDiv = document.getElementById("posts-container")
    for(const post of data){
        console.log(post.title)
        postDiv.innerHTML = `
        
        
        `
    }
}
loadPosts()
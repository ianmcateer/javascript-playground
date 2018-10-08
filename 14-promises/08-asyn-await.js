// https://www.youtube.com/watch?v=PoRJizFvM7s

//callbacks
const posts = [
  {title: 'post 1', body: 'this is post 1'},
  {title: 'post 2', body: 'this is post 2'},
]

function getPosts(){
  setTimeout(function(){
    let output = ''
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1500)
}

// synchonous way..
// function createPost(post){
//   setTimeout(function(){
//     posts.push(post)
//   }, 2000)
// }
//
// getPosts()
// createPost({title: 'Post 3', body: 'this is post 3'})


// asynchronous way..
function createPost(post, callback){
  setTimeout(function(){
    posts.push(post)
    callback()
  }, 2000)
}

getPosts()
createPost({title: 'Post 3', body: 'this is post 3'}, getPosts)


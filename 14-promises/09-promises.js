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

function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post)
      resolve()
    }, 2000)
  })
}

// handling the promise
getPosts()
createPost({title: 'Post 3', body: 'this is post 3'}).then(getPosts)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// promise.all
// const promise1 = Promise.resolve('hello world')
// const promise2 = 10
// const promise3 = new Promise(function(resolve, reject){
//   setTimeout(() => resolve(), 2000)
// })
//
// const url = `https://jsonplaceholder.typicode.com/users`
//
// const promise4 = fetch(url).then(res => res.json())
//
//
// Promise.all([promise1,promise2, promise3, promise4]).then(function(values){
//   console.log(values)
// }).catch(e => console.log(e))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async await- a way to handle responses not write them -so a way to consume promises ie handle them
async function init(){
  await createPost({title: 'Post 3', body: 'this is post 3'})
  getPosts()
}
init()

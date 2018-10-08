// promise is a special kind of object which contains another object
//two parts- creation of promises and handling of promsies

//creating promsies
new Promise(function(resolve, reject){
  
})

// the constructor accepts resolve and reject which are in turn functions
//if the asynchronos operations are successfull then then the expected result is returned by the resolve function
//if there is an error will be returned by the reject function

var keepHisWord = true

promise1 = new Promise(function(resolve, reject){
  if (keepHisWord){
    resolve('this man likes to keep his word')
  } else {
    reject('the man doesnt want to keep his word')
  }
})
//this promise gets resolved right away
console.log(promise1)


promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({
      message: "The man likes to keep his word",
      code: "aManKeepsHisWord"
    });
  }, 3000);
});
console.log(promise2);
//this promise is pending


//the promise object represents the eventtual completion or failure of an asynchronous operation

// Promise.prototype.catch(onRejected)
//
// Promise.prototype.then(onFulfilled, onRejected)
//
// Promise.prototype.finally(onFinally)

//
// Here is a small story. You are a school going kid and you ask your mom for a phone. She says “I will buy a phone for this month end.”Here is a small story. You are a school going kid and you ask your mom for a phone. She says “I will buy a phone for this month end.”

var mumsPromise = new Promise(function(resolve, reject){
  let mumsSavings = 200000
  let priceOfPhone = 600
  if (mumsSavings > priceOfPhone){
    resolve({
      band: 'iphone',
      model: '6s'
    })
  } else {
    reject(`we dont have enough savings. lets save some more money `)
  }
})

mumsPromise.then(function(value){
  console.log('hurray i got this new iphone', JSON.stringify(value))
})

mumsPromise.catch(function(reason) {
  console.log("Mom coudn't buy me the phone because ", reason);
});

mumsPromise.finally(function() {
  console.log(
    "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
  );
});

// .then and .catch methods. Since they return a Promise they can be chained again which is also shown in the image.
// If .finally is declared for a promise then it will be executed whenever a promise is settled irrespective of whether it is fulfilled or rejected.

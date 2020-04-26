// Add your code here
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
}

let name = "Steve"
let email = "steve@steve.com"
const userURL = "http://localhost:3000/users"
document.addEventListener("DOMContentLoaded", () => {
  submitData()
  // renderUser()

})

function submitData (name, email) {
  return fetch(userURL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(function (resp) {
    return resp.json()
  })
  .then(user => {
    // console.log("data:", users)
    addUserToDOM(user)
    
  })
  .catch(function(error) {
    document.body.innerHTML = error.message
  })
}

function addUserToDOM (user) {
    document.body.innerHTML = `${user.id}`
}

{/*In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

The destination URL
Headers for 'Content-Type' and 'Accept' set to 'application/json'
A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.*/}

// async function postData(dogsURL, newDog = {})  {
//   // newDog is coming in from our createNewDogFromForm() return line
// const response = await fetch(dogsURL, {
//   let  configObj = {
//     method: 'POST',
//     headers,
//     body: JSON.stringify(newDog) // body data type must match "Content-Type" header
//   }
// })
// return response.json() // parses JSON response into native JavaScript objects
// }


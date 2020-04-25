// Add your code here
const headers = {
    "content-type": "application/json",
    "accept": "application/json"
};

function submitData(name, email){
    const input = {name, email};

    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers,
        body: JSON.stringify(input)
    })
    .then(res => res.json())
    .then(data => {
        // console.log("DATA", data, "DATA");
        // const idNode = document.createElement("div");
        // idNode.textContent = data.id;
        // document.body.append(idNode);
        document.body.innerHTML = data.id;
    })
    .catch(err => {
        // console.log("error", err);
        const errNode = document.createElement("div");
        errNode.textContent = err.message;
        document.body.append(errNode);
    });
}
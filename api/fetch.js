//using then,catch
(function retrieveData() {
    fetch("https://randomuser.me/api/")
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
})();

//async await

console.log("-----------------------------------------------------------------------------------------------")
async function fetchData() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log("data from async await");
    console.log(data);
}

fetchData();
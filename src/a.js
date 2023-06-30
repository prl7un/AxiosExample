import axios from "axios"

async function a(){

  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

  await axios.get("/comments/3")
  .then((response)=>console.log(response.data.name))
}

a()
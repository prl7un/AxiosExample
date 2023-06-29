import axios from "axios"

async function a(){
  await axios.get('https://jsonplaceholder.typicode.com/comments/5')
  .then((response)=>console.log(response.data.name))
}

a()
dddd
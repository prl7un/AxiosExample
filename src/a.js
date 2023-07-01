import axios from "axios"

const a = async () =>{
  try{
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"
    await axios.get("/comments/5")
    .then((response)=>console.log(response.data.name))
  }catch(err){
    alert(err);
  }
  
}

export default a;
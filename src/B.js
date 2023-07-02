import axios from "axios"


axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"


const A = async () =>{
  return await axios.get("/comments/1")  
}

const C = async () =>{
  return await axios.get("/comments/3")
}

const E = async () =>{
  return await axios.get("/comments/5")
}



const B = () => {axios.all([A(), C(), E()])
.then(axios.spread((res1, res2, res3) => {
  console.log(res1.data.name);
  console.log(res2.data.name);
  console.log(res3.data.name);
})
)
}

export default B;

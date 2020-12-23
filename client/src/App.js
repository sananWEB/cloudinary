import React,{useState,useEffect} from 'react'
import axios from "axios"
function App() {

  
  const [name, setname] = useState()
  const [file, setfile] = useState()

 
const submit= async(e)=>{
e.preventDefault();
const data=new FormData();
data.append("name",name)
data.append("image",file)
await axios.post("http://localhost:5000/data",data)

//axios.post("https://httpbin.org/anything",data).then(res=>{console.log(res.data)})
}
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" 
        value={name} onChange={(e)=>{ setname(e.target.value)}}
        /><br/>
        <input type="file"
        onChange={(e)=>{
          const file=e.target.files[0]
          setfile(file)
          console.log(file)
        }}
        />
        <button type="submit">click</button>
      </form>
    </div>
  )
}

export default App

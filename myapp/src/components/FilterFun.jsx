import React, { useState ,useEffect} from 'react'
import axios from 'axios'

function FilterFun() {
  const [data,setData] = useState([])
  const [ tempData , settempData] = useState(data)

  const handelFilter = (e) =>{
    const input = e.target.value

    if(!(input == "all")){
      const temp = data.filter((item)=>{
        return item.Gender == input
      })

      settempData(temp)
    }else{
      settempData(data)
    }
  }

  useEffect(()=>{
    const fetch = async () =>{
      try{
        const response = await axios.get("http://localhost:3000/getuser")
        console.log(response)
        setData(response.data)
        settempData(response.data)
      }catch(err){
        console.log(err)
      }
    }

    fetch()
    
  },[])
  return (
    <>
      <select onChange={handelFilter} name="" id="">
        <option value="all">All</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
        {
          tempData.map((item , index)=>{
            return (
              <div key={index}>
                <p>Name : {item.name}</p>
                <p>Gender : {item.Gender}</p>
              </div>
            )
          })
          // console.log(data)
        }
          
    </>
  )
}

export default FilterFun
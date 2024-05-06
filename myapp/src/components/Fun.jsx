import React, { useEffect, useState } from "react";
import axios from "axios"

function Fun() {
  const colors = ["red", "blue", "green", "grey", "pink", "yellow", "black" , "orange" , "blueviolet","aqua"];
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [toggel, settoggel] = useState(false);

  const [data,setData] = useState([{name : "" , Gender : "" , id : ""}])
  const [userdata,setUSerData] = useState([{name : "" , Gender : "" , id : ""}])
  const [name,setname] = useState('')
  const [Gender , setGender] = useState('')
  const [id , setId] = useState("")

  

  const setCookie = (name, value, time) => {
    let d = new Date();
    d.setTime(d.getTime() + time * 60 * 1000);
    let exp = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + exp;
  };

  const timer = (toggel) => {
    if (toggel) {
      setTimeout(() => {
        fetch(time)
        if (time % 2 != 0) {
          chnageColor(index);
        }
        setTime((prev) => prev + 1);

        setCookie("time", time, 100);
      }, 1000);
    }
  };

  const handelStop = () => {
    console.log("stoped...");
    settoggel(false);
    setTimeout(() => {
      setCookie("time", null, null);
    }, 1000);

    
  };

  const chnageColor = (index) => {
    const body = document.querySelector("body");
    body.style.backgroundColor = colors[index];

    if (index < 9) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };


  const fetch = async (time) =>{
    try{
      const response = await axios.get(`http://localhost:3000/getuser/:${time}`)
      console.log(response)
      if (response != null){
        console.log(11)
        console.log(response.data)
        setData(response.data)
      }else{
        console.log(11111)
        setData({name : "" , Gender : "" , id : ""})
      }
      
      // settempData(response.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    if (toggel) {
      timer(toggel);
    }
  },[time,toggel]);


  const  handelChnage = (e) =>{
    const input = e.target.value
    const name = e.target.name
    setUSerData((prev) => prev.name = input)
  } 


  const handelSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`http://localhost:3000/postdata` , {id : id , name : name , Gender : Gender})
      console.log(response)
      // settempData(response.data)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <h1>CA - 5</h1>
      <h1>Welcome .</h1>

      <div id="timer">
        <div>
          <p>TImer : {time}</p>
        </div>

        <div>
          <button
            onClick={
              toggel
                ? () => {
                    settoggel(false);
                  }
                : () => {
                    settoggel(true);
                  }
            }
          >
            {toggel ? "Pause" : "Play"}
          </button>
          <button
            onClick={() => {
              handelStop();
            }}
          >
            Stop
          </button>
        </div>
      </div>
      <p>Please Give full mark🙏</p>

      {
        
           data && (
            <div key={index}>
            <p>Name : {data.name}</p>
            <p>Gender : {data.Gender}</p>
          </div>
           )
         
      }


      <form onSubmit={handelSubmit}>
        <input type="text" name="name" onChange={(e)=>setname(e.target.value)} placeholder="Name.." />
        <input type="text" name="Gender" onChange={(e)=>{setGender(e.target.value)}} placeholder="Gender.." />
        <input type="text" name="id" onChange={(e)=>{setId(e.target.value)}} placeholder="ID" />
        <button type="submit">SUbmit</button>
      </form>
    </>
  );
}

export default Fun;

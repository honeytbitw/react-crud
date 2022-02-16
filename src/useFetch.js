// this is a custom hook
import { useEffect, useState } from "react";

const useFetch = (url) => {

  
    const [data, setData] = useState(null)
    
    useEffect(()=>{
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data =>{
           console.log(data)
           setData(data)
        })
        return () => console.log('cleanup')
       }, [url])
       return{data}
    }

export default useFetch
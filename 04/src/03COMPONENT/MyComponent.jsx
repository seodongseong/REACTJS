import { useState,useEffect } from "react"


const MyComponent = ()=>{
    // state
    // let count = 0;
    const [count, setCount] = useState(1)
    // handler
    const handleClick=()=>{
        setCount(count+1)       //비동기 함수
        // console.log(count)
    }
    // 최초 1회 실행(1회만 랜더링)
    useEffect(()=>{
        console.log("init setting")
    },[])
    //count state가 변경될 때마다 실행
    useEffect(()=>{
        console.log("count state changed..", count);
    },[count])
    return (
        <>
            <h2>MyComponent..</h2>
            <button onClick={handleClick}>Btn Count : {count}</button>
        </>
    )
}



export default MyComponent


// 동기 비동기
// 







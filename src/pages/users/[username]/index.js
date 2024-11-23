//import { useRouter } from "next/router";
import  Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState,useEffect } from "react"; 

const Mycomponent = dynamic (()=>import("@/components/Mycomponent"));

export default function User(){
    //const router = useRouter();
    //const {username} = router.query;

    const [count,setCount] = useState(0);
    console.log("-count-",count)

    useEffect(() => {
        if (count === 5 ){
            setCount(0)    
        }
        else if (count === -5){
            setCount(0)
        }
    },[count]);

    return (
    <div>
        <Head>
            <title>User Page</title>
        </Head>
        
        {/*<h1>User Page</h1>*/}
        {/*<h1>Username: {username}</h1>*/}

        <Mycomponent title="hello, Next.js!"/>

        {/*<Link href='/posts/123/comments/456'>
            Go to comment page
        </Link>*/}
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} style={{color:"green"}}>-Increment</button><br />
        <button onClick={() => setCount(count - 1)} style={{color:"red"}} >-Decrement</button> <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded"> Click me </button>
    </div>
    ) 
}
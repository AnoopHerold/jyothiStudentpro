import { useState } from 'react';
import axios from 'axios';

const inputStyle = {
    marginBottom: '10px'
};
const buttonstyle = {
    width: '100px',
    backgroundColor: 'rgb(8, 187, 8)',
    borderRadius: '10px',
    borderStyle: 'hidden'

};
const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    padding: '10px',
    borderColor: 'black',
    marginLeft: '530px',
    marginRight: '530px',
    marginTop: '150px',
    borderRadius: '10px',
    borderWidth: '1px',
    textAlign: 'center',
    /*font-style: oblique;*/
    
}
function Login(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")
    const[repassword,setRepassword] = useState("")
    const[log,setLogin] = useState("")
    const[error,setError] = useState(false)

     function handleEmail(e){
     setEmail(e.target.value);
      }

     function handlePassword(e){
     setPassword(e.target.value);
     }

     function handleRepassword(e){
     setRepassword(e.target.value);
     }

    async function handleLogin(){
       
    
    
        if(password==repassword){
            setLogin({
                email,password,repassword
            })
            setError(false)
            const response = await axios.post('http://localhost:5000/login',{
                email,
                password
            })

            console.log(response); 
        }else{
            setError(true)
        }
    }
    return(
        <div style = {container}>
            <h1 style={{fontstyle:"oblique"}}>Login</h1>
            <div style = {inputStyle}> 
            <input type="email" placeholder="Enter your email" onChange={handleEmail}/><br/>
            <input type="password" placeholder="Enter your password" onChange={handlePassword}/><br/>
             <input type="password" placeholder="Re enter the password" onChange={handleRepassword}/><br />
             </div>
             <button style = {buttonstyle} onClick={handleLogin}>Login</button>
             <h1 style={{fontstyle:"oblique"}}>{log.email} <br/>{log.password}<br/> {log.repassword}</h1>
        </div>
    )
}
export default Login;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

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
    marginBottom: '10px'
    
    
}
function Reg(){
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[name,setName] = useState("");
    const[password,setPassword] = useState("")
    const[repassword,setRepassword] = useState("")
    const[signup,setSignup] = useState("")
    const[error,setError] = useState(false)

     function handleEmail(e){
     setEmail(e.target.value);
      }

     function handleName(e){
     setName(e.target.value);
     }

     function handlePassword(e){
     setPassword(e.target.value);
     }

     function handleRepassword(e){
     setRepassword(e.target.value);
     }

    function handleSignup(){
       
    
    
        if(password==repassword){
            setSignup({
                name,email,password,repassword
            })
            setError(false)
            navigate('/login') 
            axios.post('http://localhost:5000/register',{
                name,
                email,
                password,
                repassword
            })
        }else{
            setError(true)
        }
    }
    return(
        <div style = {container}>
            <h1 style={{fontstyle:"oblique"}}>Register</h1>
        <div style = {inputStyle}>
             <input type="text" placeholder="Enter your username" onChange={handleName}/><br />
             <input type="email" placeholder="Enter your email" onChange={handleEmail}/><br/>
             <input type="password" placeholder="Enter your password" onChange={handlePassword}/><br/>
             <input type="password" placeholder="Re enter the password" onChange={handleRepassword}/><br />
         </div>
         {error ==true ?<p>Add all fields</p>:""}
         <button style = {buttonstyle} onClick={handleSignup}>Sign Up</button>
         <h1 style={{fontstyle:"oblique"}}>{signup.name} <br/>{signup.email} <br/>{signup.password}<br/> {signup.repassword}</h1>
         </div>
    )
}

export default Reg;
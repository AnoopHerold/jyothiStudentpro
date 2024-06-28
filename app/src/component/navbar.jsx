const b={
    display:'flex',
    justifyContent:'left',
    color:'white',
    backgroundColor:'skyblue',
    padding: '60px',
    borderRadius:'10px'
}
function Nav(){
    return(
    <div style={b}>
    <hi style={{fontSize:'50px'}}>Jyothi</hi>
    <button style={{width:'100px',borderRadius:'10px',marginBlockEnd:'auto'}}><a href="/home">home</a></button>
    <button style={{width:'100px',borderRadius:'10px',marginBlockEnd:'auto'}}><a href="/register">register</a></button>
    <button style={{width:'100px',borderRadius:'10px',marginBlockEnd:'auto'}}><a href="/login">login</a></button>
    
    </div>  
    
);
}
export default Nav
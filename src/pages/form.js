


export default function Form (){



    return(
        <>
            <div style={{height:"100%",width:"100%",backgroundColor:"rgba(128, 128, 128, 0.5)" ,position:"absolute",top:"0",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{ width:"25%",backgroundColor:"white",borderRadius:"20px"}}>

<form onSubmit={submitInfo}>
    <div style={{display:"flex", justifyContent:"center", backgroundColor:"#058CCF", color:"white"}}>
        <h3>Student Form</h3>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
        <img src="./userIcon.jpg" style={{height:"30px",width:"30px"}}></img>
    </div>

  <div style={{padding:"20px"}}>
  <label>Name </label><br></br>
<input type="text" placeholder="enter your name" name="username" style={{width:"100%",height:"30px"}}></input><br></br>
<label>Id </label><br></br>
<input type="text" placeholder="enter your Id" name="userid" style={{width:"100%" ,height:"30px"}} ></input><br></br>
<label>Address </label><br></br>
<input type="text" placeholder="enter your Address" name="useraddress" style={{width:"100%" ,height:"30px"}} ></input><br></br>
<div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
<button type="submit" style={{backgroundColor:"#3BBDF5",border:"none",width:"35%",height:"30px",borderRadius:"20px"}}>Submit</button>
<button  style={{backgroundColor:"red" ,border:"none",width:"35%",height:"30px",borderRadius:"20px"}}>Cancel</button>
    </div> 


</div>


</form>
</div>
</div>

        </>
       
       
    )
    
}
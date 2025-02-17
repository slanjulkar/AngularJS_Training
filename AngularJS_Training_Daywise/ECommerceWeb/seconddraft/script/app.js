$(document).ready(()=>{

    $("#btnLogin").click(()=>{
        let emailAddress = $("#txtemail").val();
        let password = $("#txtpass").val();

        if(Validate(emailAddress, password)){
            
            $("txtmessage").html("Welcome to Transflower")
        }
        else{
            $("txtmessage").html("Invalid user, please try again")
        }        
        
    })
    
})
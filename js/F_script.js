$(".b-1").click(function(){
    var x=$("#name").val();
    var y=$("#pass").val();

    if(x=="")
    {
        $("#msg1").html("<i>*Please Enter Username*</i>");
        $("#msg1").addClass("error-color");
        $("#name").addClass("error-border");
        return false;
           
    }
    else
    {
        if(y=="")
        {
            $("#msg1").hide();
            $("#name").addClass("normal-border");
            
            $("#msg2").html("<i>*Please Enter Password*</i>");
            $("#msg2").addClass("error-color");
            
            $("#pass").addClass("error-border");
            return false;
        }
    }
    
})

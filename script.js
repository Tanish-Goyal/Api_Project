$(document).ready(function(){

    var $Btn_Log=$("#Log_in");
    var $Password=$("#password");
    var $Username=$("#username");
    var $Warning=$("#Warning");

    var $Users=$("#Users");
    var $L_Keys=$("#L_Keys");
    var $A_Users=$("#A_Users");

    $Btn_Log.on('click',function(){
        $.ajax({
            type:'Get',
            url:'http://autocad-script-generator.herokuapp.com/admin_login?username=' + $Username.val() + '&password=' + $Password.val(),
            success:function(){
                console.log("Success");
                $Warning.text("");
            },
            error:function(){
                console.log("Error");
                $Warning.text("Invalid Username or Password.");
                $Warning.css({'color' : 'red', 'font-weight' : '500'});
            }
        });
    });
});
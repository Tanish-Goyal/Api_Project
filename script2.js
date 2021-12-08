$(document).ready(function(){

    var $table1=$("#table1");
    var $table2=$("#table2");
    var $table3=$("#table3");


    $table2.css("display","none");
    $table3.css("display","none");

    
    var $Users=$("#Users");
    var $L_Keys=$("#L_Keys");
    var $A_Users=$("#A_Users");

    var $U_User_id=$("#U_User_id");
    var $U_Username=$("#U_Username");
    var $U_Password=$("#U_Password");
    var $U_Key=$("#U_Key");
    var $U_System_id=$("#U_System_id");

    var $L_License_Key=$("#L_License_Key");
    var $L_Is_Valid=$("#L_Is_Valid");

    var $A_Username=$("#A_Username");
    var $A_Password=$("#A_Password");

    var $Add_user=$("#Add_user");
    var $Remove_user=$("#Remove_user");

    

    $.ajax({
        type:'GET',
        url:'http://autocad-script-generator.herokuapp.com/users?username=' + 'admin' + '&password=' + 'admin',
        success:function(users_info){

            $U_User_id.empty();
            $U_Username.empty();
            $U_Password.empty();
            $U_Key.empty();
            $U_System_id.empty();

            $.each(users_info,function(i,u_info){
                $U_User_id.append('<li>' + u_info.user_id + '</li>');
                $U_Username.append('<li>' + u_info.username + '</li>');
                $U_Password.append('<li>' + u_info.password + '</li>');
                $U_Key.append('<li>' + u_info.key + '</li>');
                $U_System_id.append('<li>' + u_info.system_id + '</li>');

            });
            

            console.log("Success");
        },
        error:function(){
            console.log("Error");
        }
    });

    $Users.on('click',function(){
        $.ajax({
            type:'GET',
            url:'http://autocad-script-generator.herokuapp.com/users?username=' + 'admin' + '&password=' + 'admin',
            success:function(users_info){

                $U_User_id.empty();
                $U_Username.empty();
                $U_Password.empty();
                $U_Key.empty();
                $U_System_id.empty();

                $.each(users_info,function(i,u_info){
                    $U_User_id.append('<li>' + u_info.user_id + '</li>');
                    $U_Username.append('<li>' + u_info.username + '</li>');
                    $U_Password.append('<li>' + u_info.password + '</li>');
                    $U_Key.append('<li>' + u_info.key + '</li>');
                    $U_System_id.append('<li>' + u_info.system_id + '</li>');

                });

                $table1.css("display","block");
                $table2.css("display","none");
                $table3.css("display","none");
                

                console.log("Success" + users_info);
            },
            error:function(){
                console.log("Error");
            }
        });
    });

    $L_Keys.on('click',function(){
        $.ajax({
            type:'GET',
            url:'http://autocad-script-generator.herokuapp.com/license?username=' + 'admin' + '&password=' + 'admin',
            success:function(users_info){

                $L_License_Key.empty();
                $L_Is_Valid.empty();
                $.each(users_info,function(i,L_Keys_info){
                    $L_License_Key.append('<li>' + L_Keys_info.key + '</li>');
                    $L_Is_Valid.append('<li>' + L_Keys_info.valid + '</li>');

                });
                $table2.css("display","block");
                $table1.css("display","none");
                $table3.css("display","none");

                console.log("Success");
            },
            error:function(){
                console.log("Error");
            }
        });
    });

    $A_Users.on('click',function(){
        $.ajax({
            type:'GET',
            url:'http://autocad-script-generator.herokuapp.com/admin_users?username=' + 'admin' + '&password=' + 'admin',
            success:function(users_info){

                $A_Username.empty();
                $A_Password.empty();

                $.each(users_info,function(i,admin_user_info){
                    $A_Username.append('<li>' + admin_user_info.username + '</li>');
                    $A_Password.append('<li>' + admin_user_info.password + '</li>');

                });
                
                $table3.css("display","block");
                $table1.css("display","none");
                $table2.css("display","none");
                console.log("Success");
            },
            error:function(){
                console.log("Error");
            }
        });
    });

    
    $Add_user.on('click',function(){
        var uname=prompt("Please enter new username:","Username");
        var passw=prompt("Please enter new password:","Password");

        $.ajax({
            type:'POST',
            url:'http://autocad-script-generator.herokuapp.com/admin_users?username=admin&password=admin&new_user='+ uname+ '&new_user_pass=' +passw,
            success:function(a_info){

                /*$A_Username.empty();
                $A_Password.empty();*/

                /*$.each(users_info,function(i,admin_user_info){
                    $A_Username.append('<li>' + a_info.username + '</li>');
                    $A_Password.append('<li>' + a_info.password + '</li>');

                //});*/
                
                $.ajax({
                    type:'GET',
                    url:'http://autocad-script-generator.herokuapp.com/admin_users?username=' + 'admin' + '&password=' + 'admin',
                    success:function(users_info){
        
                        $A_Username.empty();
                        $A_Password.empty();
        
                        $.each(users_info,function(i,admin_user_info){
                            $A_Username.append('<li>' + admin_user_info.username + '</li>');
                            $A_Password.append('<li>' + admin_user_info.password + '</li>');
        
                        });
                        
        
                        console.log("Success");
                    },
                    error:function(){
                        console.log("Error");
                    }
                });
                console.log("Success" + info);
            },
            error:function(){
                console.log("Error");
            }
        });

    });

    $Remove_user.on('click',function(){
        var rem_uname=prompt("Please enter username to be removed:","Username");

        $.ajax({
            type:'DELETE',
            url:'http://autocad-script-generator.herokuapp.com/admin_users?username=admin&password=admin&del_user='+ rem_uname,
            success:function(){

                console.log("Success");
                $.ajax({
                    type:'GET',
                    url:'http://autocad-script-generator.herokuapp.com/admin_users?username=' + 'admin' + '&password=' + 'admin',
                    success:function(users_info){
        
                        $A_Username.empty();
                        $A_Password.empty();
        
                        $.each(users_info,function(i,admin_user_info){
                            $A_Username.append('<li>' + admin_user_info.username + '</li>');
                            $A_Password.append('<li>' + admin_user_info.password + '</li>');
        
                        });
                        
        
                        console.log("Success");
                    },
                    error:function(){
                        console.log("Error");
                    }
                });
            },
            error:function(){
                console.log("Error");
            }
        });

        

    });

});
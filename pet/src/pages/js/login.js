var user, key, user_pass, key_pass;

//获取input和span的所有id
window.onload=function(){
    user=document.getElementById("user");
    key=document.getElementById("key");
    user_pass=document.getElementById("user_pass");
    key_pass=document.getElementById("key_pass");
}


function checkUser(){
    //如果昵称未输入，则提示输入昵称
    if(!user.value){
    	 user_pass.style.fontSize = "13px";
         user_pass.style.width="98%";
         user_pass.style.height="2em";
         user_pass.style.lineHeight="2em";
         user_pass.style.color="red";
         user_pass.innerHTML = '你还没有填写用户名哦。';
         user_pass.style.display="block";
         return false;
    }
    else if(user.value){
        user_pass.style.display="none";
        return true;
    }
}

///输入密码提示
function checkKey(){
    //如果未输入密码，则提示请输入密码
    if(!key.value){
        key_pass.style.fontSize = "13px";
        key_pass.style.width="98%";
        key_pass.style.height="2em";
        key_pass.style.lineHeight="2em";
        key_pass.style.color="red";
        key_pass.innerHTML = '你还没有填写密码哦。';
        key_pass.style.display="block";
        return false;
    }
    else{
        key_pass.innerHTML ='';
        key_pass.style.backgroundColor= "#fff";
        key_pass.style.border="none";
        key_pass.style.display="none";
        return true;
    }

}

function submitA(){

    if(!user.value){
        user_pass.style.fontSize = "13px";
        user_pass.style.color = "red";
        user_pass.style.width="98%";
        user_pass.style.height="2em";
        user_pass.style.lineHeight="2em";
        user_pass.innerHTML = '请填写您的用户名。';
        user.focus();
        return false;
    }
    else if(!key.value){
        key_pass.style.fontSize = "13px";
        key_pass.style.color = "red";
        key_pass.style.width="98%";
        key_pass.style.height="2em";
        key_pass.style.lineHeight="2em";
        key_pass.innerHTML = '请填写您的用户密码。';
        key.focus();
        return false;
    }

    else{
        // var f = sendParam();
        // return f;
    }

}

function isTrue(){
        var true_key=0;//与后端交互获取正确密码
          if(key==true_key){
             return true;
            }
          else if(key!=true_key){
             return false;
            }	
}
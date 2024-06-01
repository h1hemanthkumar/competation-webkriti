
const emails=["hemanthhm693@gmail.com"];
const passwords=["h1m1v11234"];
let otpdone=0;
let email;
let randomnumber;
function login()
{   const email1=document.getElementById("Name").value;
    const password=document.getElementById("Password").value;
    let found=false;
    for(let i=0;i<emails.length;i++)
    {   if(emails[i]==email1&&passwords[i]==password)
        {   found=true;
            document.location.href="homepage.html";
            break
        }
    }
    if(!found)
    {   document.getElementById("verify").textContent="You entered wrong password or user id"
    }
}

function submit()
{   email=document.getElementById("Name").value;
    const password=document.getElementById("Password").value;
    const verifypassword=document.getElementById("verify-Password").value;
    if(password=="")
    {   window.alert("Enter the password");
        return;
    }
    else if(password!=verifypassword)
    {   window.alert("Password not matched");
        return;
    }
    if(email=="")
    {   window.alert("Enter the email");
        return;
    }
    let min=1000;
    let max=9999;
    
    randomnumber=Math.floor(Math.random()*(max-min))+min;   
    Email.send({
    SecureToken : "ceced28b-1838-4b67-a7ad-566f2d27396d",
    To :email,
    From : "hemanthhm693@gmail.com",
    Subject : "This is the subject",
    Body : `Your otp is:${randomnumber}`
    }).then(
    message => alert(message)
    );  
    otpdone=1;
}
function signup()
{   const email=document.getElementById("Name").value;
    const password=document.getElementById("Password").value;
    if(otpdone)
    {   emails=[...emails,email];
        password=[...passwords,password];
        document.location.href="homepage.html";   
    }
    else
    {   window.alert("Otp did not entered");    
    }
}
function AskQue()
{   event.preventDefault()
    const Name=document.getElementById("Name").value;
    const email=document.getElementById("email").value;
    const number=document.getElementById("Number").value;
    const comments=document.getElementById("comments").value;
    Email.send({
    SecureToken : "ceced28b-1838-4b67-a7ad-566f2d27396d",
    To :"hemanthhm693@gmail.com",
    From : "hemanthhm693@gmail.com",
    Subject : "This is the subject",
    Body : `Name:${Name} <br>Email:${email} <br>Number:${number} <br>Comment:${comments}`
    }).then(
    message => alert(message)
    ); 
}
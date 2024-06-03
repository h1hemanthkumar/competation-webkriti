let bulb=false;
let fire=false;
let emails=["hemanthhm693@gmail.com"];
let passwords=["h1m1v11234"];
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
        passwords=[...passwords,password];
        document.location.href="index.html";   
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
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


setInterval(function() {
  plusSlides(1);
},2000);

function toCheck() {
  bulb = !bulb; 
  const bulbElement = document.getElementById("bulb");
  
  if (bulb) {
      bulbElement.src = "bulb-off.png";
  } else {
      bulbElement.src = "bulb-on.png"; 
  }
}
function toCheckfire()
{ fire=!fire;
  const fireElement=document.getElementById("fire");
  
  if(fire)
  {  fireElement.src="rocket-fire.png";
  }
  else
  {  fireElement.src="rocket-fire-off.png";
  }
}

/*function Vision() {
  function ToCheck()
  {   const [isOn, setIsOn] = React.useState(false);

      setIsOn(prev => !prev);
  
      return (
          <div>
              {isOn ? <img src="bulb-off.png" alt="Bulb On"></img> : <img src="bulb-on.png" alt="Bulb Off"></img>}
          </div>
      );
  }
  return(
      <div>
          <div id="vision-left">
              <h2 id="vision-head">Vision</h2>
              <p id="vision-text">To Inspire and Lead People to be Innovative by Enriching Customers Virtual presence with Ingenuity and delivering beyond expectation.</p>
          </div>
          <div id="vision-right">
              <img src="bulb-on.png" onclick="ToCheck()"></img>
          </div>
      </div>
  )
  
}

  ReactDOM.render(<Vision />, document.getElementById("vision-right"));*/
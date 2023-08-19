const email=document.querySelector("input[type=email]");
const form=document.querySelector("#form");

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  if (email.value=="" || email.value==" ") {
    console.log("error")
    form.classList.add("error")
  } else {
    console.log("success")
    document.location.href="success.html";
  }
})
const form=document.querySelector("#form");
const firstName=document.querySelector("#first-name");
const lastName=document.querySelector("#last-name");
const password=document.querySelector("#password");
const email=document.querySelector("#email");
const allInputs=document.querySelectorAll("#form input")


form.addEventListener("submit", e=>{
    e.preventDefault();
    validateInput();
})


function validateInput(){   
    for(const input of allInputs){
        const error=input.nextElementSibling;
        const img=document.createElement("IMG");
        img.src="images/icon-error.svg"
        
        if(input.id==="email"){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email.value)){
                input.placeholder="email@example/com"
                error.innerText=`Looks like this is not an email`
                input.classList.add("error-border");
                input.style.background = "url(images/icon-error.svg) no-repeat 95%";


            }   
            else{
                input.value=email.value;
                error.innerText="";
                input.classList.remove("error-border");
                input.style.background ="";
            }
        }
        


        else{
            if(input.value===""){
                input.placeholder=""
                error.innerText=`${input.name} cannot be empty`
                input.classList.add("error-border");
                input.style.background = "url(images/icon-error.svg) no-repeat 95%";
            }
            else{
                input.value=input.value;
                error.innerText="";
                input.classList.remove("error-border");
                input.style.background ="";
            }
        }
        
        
    }
}

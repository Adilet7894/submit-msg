const input= document.querySelector('#input');
const button= document.querySelector("#btn")
const alert= document.querySelector("#alert")
const message= document.querySelector("#message")

button.addEventListener('click', function(){
    if(input.value ===''){
        alert.style.display= 'block';
        alert.innerText= 'Please type a message!';
        setTimeout(hideAlert,2000);
    }else{
        message.innerHTML= input.value;
        input.value='';
        button.style.backgroundColor='grey';
    }
})

function hideAlert(){
    alert.style.display='none';
}

// input.addEventListener('input', function(){
//     message.innerHTML= input.value;
// })
const button = document.getElementById('idea-button')
let ideaBox = document.getElementById('idea-box')

button.addEventListener('click',()=>{

   ideaBox.textContent = '';

   fetch ('https://apis.scrimba.com/bored/api/activity')
   .then(Response => Response.json())
   .then(data =>{
      ideaBox.textContent += data.activity
   })


})

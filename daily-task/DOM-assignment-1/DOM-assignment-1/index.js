let signup = document.getElementById('signup');

signup.addEventListener('submit',(event)=>{
    event.preventDefault();

   let name = document.getElementById('name').value;
   let email = document.getElementById('email').value;
   let country = document.getElementById('country').value;
   let phone = document.getElementById('phone').value;
   let password = document.getElementById('password').value;

    let data ={
        name,
        email,
        country,
        phone,
        password
    }

    console.log(data);
})

// sign in JS Start

let signIn = document.getElementById('signin');

signIn.addEventListener('submit',(event)=>{

    event.preventDefault();

    let nameIn = document.getElementById('signin-name').value;
    let emailIn = document.getElementById('signin-email').value;
    let passwordIn = document.getElementById('signin-password').value;

    let details = {
        name : nameIn,
        email : emailIn,
        password : passwordIn
    }

    console.log(details);

})

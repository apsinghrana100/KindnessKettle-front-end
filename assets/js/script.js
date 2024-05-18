// function signIn()
// {
//     let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    
//     let form = document.createElement('form')
//     form.setAttribute('method','GET')
//     form.setAttribute('action',oauth2Endpoint)

//     let params = {
//         "client_id":"703310288937-m5t1ki80ogdfl3i0seuu168bnbk5h8qa.apps.googleusercontent.com",
//         "redirect_uri":"http://localhost:5500/src/profile.html",
//         "response_type":"token",
//         "scope":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
//         "include_granted_scopes":"true",
//         'state':'pass-through-value'
//     }

//     for(var p in params)
//         {
//             let input = document.createElement('input')
//             input.setAttribute('type','hidden')
//             input.setAttribute('name',p)
//             input.setAttribute('value',params[p])
//             form.appendChild(input)
//         }

//         document.body.appendChild(form)
//         form.submit();
// }

// import { loadLogin } from "./auth";

document.addEventListener('DOMContentLoaded', () => {
    const ParentElement = document.querySelector('.contain');
    ParentElement.innerHTML = "";

    const bgDiv = document.createElement('div');
    bgDiv.className = 'bg';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.innerHTML = '<b>Welcome to Kindness Kettle</b>';
    contentDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description';
    descriptionDiv.innerText = 'Easily donate surplus food from your home, workplace, or events. Your donations go directly to those in need, making a meaningful impact on their lives.';
    contentDiv.appendChild(descriptionDiv);

    const signInButton = document.createElement('button');
    signInButton.className = 'button';
    signInButton.style.verticalAlign = 'middle';
    signInButton.innerHTML = '<span>Sign In</span>';
    signInButton.onclick = loadLogin;
    contentDiv.appendChild(signInButton);


    bgDiv.appendChild(contentDiv);


    ParentElement.appendChild(bgDiv);
 
});

window.onload = () =>{
    console.log("i am loading")
        const idToken = parseTokenFromUrl();
if (idToken) {
    fetchUserInfo(idToken);
}
}



function signIn() {
    alert("Sign-in functionality not yet implemented.");
}



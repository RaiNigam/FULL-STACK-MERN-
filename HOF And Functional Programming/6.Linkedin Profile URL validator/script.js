const LinkedInUrl=document.querySelector('.LinkedInUrl');

const regExp=/[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g;
const btn=document.querySelector('.btn');
const div=document.querySelector('div');

btn.addEventListener('click',()=>{
    const p=document.createElement('div');
            p.setAttribute("class","result");
            div.appendChild(p);
    if(regExp.test(LinkedInUrl
        .value)){
            p.innerText="Valid";
        }else{
            p.innerText="Invalid";
        }
})



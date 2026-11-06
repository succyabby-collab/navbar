const mobilemenu = document.getElementById('menu-bar');

const navlink = document.querySelector('.nav-link');

mobilemenu.addEventListener('click',()=>{
    navlink.classList.toggle('active');   
});

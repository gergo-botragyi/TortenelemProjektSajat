const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.linkek');
    const linkek = document.querySelectorAll('.linkek li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        linkek.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navlinkfade 0.5s ease forwards ${index /7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });  
}

navSlide();
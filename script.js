let soracontainer = document.querySelector('.sora');
let pop = document.querySelector('.pop');
let ayatcont = document.querySelector('.ayat');
let close = document.querySelector('.close');
let nav = document.querySelector('.nav');
getsora();



jQuery(document).ready(function() {
    var navbar = $(".nav");
    var scrollPosition = $(window).scrollTop();

    $(window).scroll(function() {
    scrollPosition = $(this).scrollTop();

    if (scrollPosition > 538) {
        navbar.addClass("white-bg");
        navbar.addClass("a");
    } else {
        navbar.removeClass("white-bg");
        navbar.removeClass("a");
    }
    });
});

function getsora() {
    fetch("http://api.alquran.cloud/v1/meta")
    .then(rest => rest.json())
    .then(data => {
        let soras = data.data.surahs.references;
        let nbrsora = 114;
        for (let i = 0; i < nbrsora; i++) {
            soracontainer.innerHTML += `
                <div class="sorah">
                    <p class="ay">${soras[i].name}</p>
                    <p class="ay">${soras[i].englishName}</p>
                </div>`;
        };

        let soratitel = document.querySelectorAll('.sorah');
        soratitel.forEach((title, index) => {
            title.addEventListener('click', () => {
                

                fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
                .then(rest => rest.json())
                .then(data => {
                    ayatcont.innerHTML = "";
                    let Ayat = data.data.ayahs;
                    Ayat.forEach(aya => {
                        pop.classList.add('active');
                        nav.style.display = 'none';
                        ayatcont.innerHTML +=`
                            <p>(${aya.numberInSurah}) - ${aya.text}</p>
                        `;
                    });
                });
            });
        });
    });
}

close.addEventListener('click', () => {
    pop.classList.remove('active');
    nav.style.display = 'block';
});

const sr = ScrollReveal({
    distance:'90px',
    duration: 1600,
    delay: 450,
    reset:false
});

sr.reveal('.ay',{delay:200, origin:'right'});

//  ------adkar sabah 

let close2 = document.getElementById('close2');
let btn1 = document.getElementById('btn1');
let adakar1 = document.getElementById('myCarousel');
btn1.onclick= function sabah() {
    adakar1.style.visibility='visible';
    close2.style.visibility='visible';
};

close2.onclick = function sabahnone() {
    adakar1.style.visibility='hidden';
    close2.style.visibility='hidden';
};

//  ------adka masae

let close3 = document.getElementById('close3');
let btn2 = document.getElementById('btn2');
let adakar2 = document.getElementById('myCarousel2');
btn2.onclick= function sabah() {
    adakar2.style.visibility='visible';
    close3.style.visibility='visible';
};

close3.onclick = function sabahnone() {
    adakar2.style.visibility='hidden';
    close3.style.visibility='hidden';
};


//  ------adkar masjid

let close4 = document.getElementById('close4');
let btn3 = document.getElementById('btn3');
let adakar4 = document.getElementById('myCarousel3');
btn3.onclick= function sabah() {
    adakar4.style.visibility='visible';
    close4.style.visibility='visible';
};

close4.onclick = function sabahnone() {
    adakar4.style.visibility='hidden';
    close4.style.visibility='hidden';
};

// adkar isti9ad
let close5 = document.getElementById('close5');
let btn4 = document.getElementById('btn4');
let adakar5 = document.getElementById('myCarousel4');
btn4.onclick= function sabah() {
    adakar5.style.visibility='visible';
    close5.style.visibility='visible';
};

close5.onclick = function sabahnone() { 
    adakar5.style.visibility='hidden';
    close5.style.visibility='hidden';
};


// adkar wodo2e
let close6 = document.getElementById('close6');
let btn5 = document.getElementById('btn5');
let adakar6 = document.getElementById('myCarousel5');
btn5.onclick= function sabah() {
    adakar6.style.visibility='visible';
    close6.style.visibility='visible';
};

close6.onclick = function sabahnone() {
    adakar6.style.visibility='hidden';
    close6.style.visibility='hidden';
};

// adkar manzil
let close67 = document.getElementById('close7');
let btn6 = document.getElementById('btn6');
let adakar7 = document.getElementById('myCarousel6');
btn6.onclick= function sabah() {
    adakar7.style.visibility='visible';
    close7.style.visibility='visible';
};

close7.onclick = function sabahnone() {
    adakar7.style.visibility='hidden';
    close7.style.visibility='hidden';
};

const swiper = new Swiper('.swiper', {
    
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

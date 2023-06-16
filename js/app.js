

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    // direction: 'vertical',
    // spaceBetween: 24,
    speed: 1000,
    loop: true,

    // If we need pagination
    pagination: {
        clickable: true,
    },

    // Navigation arrows
    navigation: {

        prevEl: '.swiper-button-next',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            // spaceBetween: 50,
        },
    },
});



// --------------------------------------------------------------------------------------------------------------------------





function showDiv(divNumber) {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');

    // Hide all div elements
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';

    // Show the selected div
    if (divNumber === 1) {
        div1.style.display = 'block';
    } else if (divNumber === 2) {
        div2.style.display = 'block';
    } else if (divNumber === 3) {
        div3.style.display = 'block';
    }
}








// ----------------------------------------------------- for toggle -----------------------------------------------------------

// function toggleVisibility(section) {
//     var skill = document.querySelector('.skill');
//     var experience = document.querySelector('.experience');
//     var education = document.querySelector('.education');

//     if (section === 'skill') {
//         if (experience.style.display === 'none' && education.style.display === 'none') {
//             experience.style.display = 'block';
//             education.style.display = 'block';
//         } else {
//             experience.style.display = 'none';
//             education.style.display = 'none';
//         }
//     } else if (section === 'experience') {
//         if (skill.style.display === 'none' && education.style.display === 'none') {
//             skill.style.display = 'block';
//             education.style.display = 'block';
//         } else {
//             skill.style.display = 'none';
//             education.style.display = 'none';
//         }
//     } else if (section === 'education') {
//         if (skill.style.display === 'none' && experience.style.display === 'none') {
//             skill.style.display = 'block';
//             experience.style.display = 'block';
//         } else {
//             skill.style.display = 'none';
//             experience.style.display = 'none';
//         }
//     }
// }




///////////////////////////////////////////  email ////////////////////////////////////////////////////////////



function sendEmail() {
    Email.send({
        secureToken: "2d2056e3-bf82-419e-9168-1e728b2e56e3",

        To: 'praveenkr0812@outlook.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form",
        Body: "Name:" + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Phone Number:" + document.getElementById("contact").value
            + "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully But Please Fell Free to call +91 8660435935")
    );
}




// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


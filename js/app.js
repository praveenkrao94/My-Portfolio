var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
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




///////////////////////////////////////////  Form validation ////////////////////////////////////////////////////////////

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    formcallback()
})

const setError = (element, message) => {
    const inp = element.parentElement

    inp.querySelector('.error').innerText = message
    inp.classList.add('error')
    inp.classList.remove('success')
}


const setSuccess = (element) => {
    const inp = element.parentElement
    inp.querySelector('.error').innerText = ''
    inp.classList.add('success')
    inp.classList.remove('error')
}





const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const formcallback = () => {

    const inputs = [
        { element: username, validation: val => val.trim() !== '', message: "please enter valid" },
        { element: email, validation: val => val.trim() !== '' && isValidEmail(val), message: "please enter valid email addess" }

    ]

    inputs.forEach((inp) => {
        if (!inp.validation(inp.element.value)) {
            setError(inp.element, inp.message)
        } else {
            setSuccess(inp.element)
        }
    })

}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


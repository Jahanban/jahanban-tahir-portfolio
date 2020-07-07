// // Smooth Scroll

// function smoothScroll(dest, duration) {
//     let target = document.querySelector(dest);
//     let targetPosition = target.getBoundingClientRect().top;
//     let startPosition = window.pageYOffset;
//     let distance = targetPosition - startPosition;
//     let startTime = null;

//     console.log(targetPosition);

//     function animation(currentTime) {
//         if (startTime === null) startTime = currentTime;
//         let timeElapsed = currentTime - startTime;
//         let run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     //ease in fucntion from gizma
//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1 + b);
//     }

//     requestAnimationFrame(animation);
// }

// const profile = document.querySelector('.nav-profile');
// profile.addEventListener('click', function () {
//     smoothScroll('.profile', 1000);
// })

// const skills = document.querySelector('.nav-skills');
// skills.addEventListener('click', function () {
//     smoothScroll('.skills', 1000)
// })

// const projects = document.querySelector('.nav-projects');
// projects.addEventListener('click', function () {
//     smoothScroll('.projects', 2000)
// })

// const blog = document.querySelector('.nav-blog');
// blog.addEventListener('click', function () {
//     smoothScroll('.blog-posts', 2500)
// })

// const contact = document.querySelector('.nav-contact');
// contact.addEventListener('click', function () {
//     smoothScroll('.contact', 2800)
// })

// const backToTop = document.querySelector('.back-to-top');
// backToTop.addEventListener('click', function () {
//     smoothScroll('.nav-links', 2800)
// })

// better Jquery

$(document).ready(function () {

    const scrollLink = $('.scroll');

    //smooth scrolling

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500)
    });

    // Active links

    $(window).scroll(function () {
        const scrollBarLocation = $(this).scrollTop();

        scrollLink.each(function () {
            const sectionOffset = $(this.hash).offset().top;
        })

    })
})
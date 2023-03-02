const CarouselDiv = document.getElementById('carousel');
const CC1 = document.getElementById('CC1');
const CC2 = document.getElementById('CC2');
const CC3 = document.getElementById('CC3');
const Tab1 = document.getElementById('tab1');
const Tab2 = document.getElementById('tab2');
const Schedule = document.getElementById('schedule');
const ScheduleContainer = document.getElementById('mountain-schedule-containter');
const TopNav = document.getElementById('top-nav');
const MidNav = document.getElementById('mid-nav');

CC1.addEventListener('click', function() {
    CarouselDiv.innerHTML = `
    <img class="history-carousel-img-first" src="./images/thumbnail10.png" alt="hiker on top of mountian peak looking out">
    <img class="history-carousel-img" src="./images/thumbnail8.png" alt="misty mountian">
    <img class="history-carousel-img" src="./images/thumbnail10.png" alt="hiker on top of mountian peak looking out">
    <img class="history-carousel-img-last" src="./images/thumbnail8.png" alt="misty mountian">
    `;
});

CC2.addEventListener('click', function() {
    CarouselDiv.innerHTML = `
    <img class="history-carousel-img-first" src="./images/thumbnail8.png" alt="misty mountian">
    <img class="history-carousel-img" src="./images/thumbnail10.png" alt="hiker on top of mountian peak looking out">
    <img class="history-carousel-img" src="./images/thumbnail8.png" alt="misty mountian">
    <img class="history-carousel-img-last" src="./images/thumbnail10.png" alt="hiker on top of mountian peak looking out">
    `;
});

CC3.addEventListener('click', function() {
    CarouselDiv.innerHTML = `
    <img class="history-carousel-img-first" src="./images/thumbnail8.png" alt="misty mountian">
    <img class="history-carousel-img" src="./images/thumbnail10.png" alt="hiker on top of mountian peak looking out">
    <img class="history-carousel-img" src="./images/thumbnail10.png" alt="hiker on top of mountian peak looking out">
    <img class="history-carousel-img-last" src="./images/thumbnail8.png" alt="misty mountian">
    `;
});

Tab1.addEventListener('click', function() {
    if (Tab1.className === 'active') {
        Tab1.className = 'active';
        Tab2.className = 'inactive';
    }

    else {
        Tab1.className = 'active';
        Tab2.className = 'inactive';
    }
});

Tab2.addEventListener('click', function() {
    if (Tab2.className === 'active') {
        Tab2.className = 'active';
        Tab1.className = 'inactive';
    }

    else {
        Tab2.className = 'active';
        Tab1.className = 'inactive';
    }
});

Tab1.addEventListener('click', function() {
    if (Tab1.className === 'active') {
        Schedule.innerHTML = `
                <p>25 Nov 2016</p>
                <p>Vestibulum viverra</p>
                <p>28 Nov 2016</p>
                <p>Vestibulum viverra</p>
                <p>18 Dec 2016</p>
                <p>Vestibulum viverra</p>
                <p>7 Jan 2017</p>
                <p>Vestibulum viverra</p>
        `;
    }
});

Tab2.addEventListener('click', function() {
    if (Tab2.className === 'active') {
        Schedule.innerHTML = `
                <p>17 Nov 2016</p>
                <p>Vestibulum viverra</p>
                <p>13 Dec 2016</p>
                <p>Vestibulum viverra</p>
                <p>28 Dec 2016</p>
                <p>Vestibulum viverra</p>
                <p>9 Fed 2017</p>
                <p>Vestibulum viverra</p>
        `;
    }
});

Tab2.addEventListener('click', function() {
    if (Tab2.className === 'active') {
        ScheduleContainer.className = 'mountain-schedule-containter-inactive';
    }
});

Tab1.addEventListener('click', function() {
    if (Tab1.className === 'active') {
        ScheduleContainer.className = 'mountain-schedule-containter-active';
    }
});

if (window.innerWidth <= 768) {
    TopNav.innerHTML = `
    <i class="fa fa-bars top-nav-icon" aria-hidden="true"></i>
    `;
}

if (window.innerWidth <= 768) {
    MidNav.innerHTML = `
    <i class="fa fa-bars mid-nav-icon" aria-hidden="true"></i>
    `;
}









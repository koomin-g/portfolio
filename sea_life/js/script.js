const sections = document.querySelectorAll("section");
const scrollGuide = document.querySelector(".scroll-guide");

let current = 0;
let isScrolling = false;


// 화면 이동
function moveSection() {

    isScrolling = true;

    window.scrollTo({
        top: sections[current].offsetTop,
        behavior: "smooth"
    });

    updateScrollGuide();

    // 이동 잠금 시간
    setTimeout(function() {
        isScrolling = false;
    }, 500);
}


// 안내 문구
function updateScrollGuide() {

    if (current === sections.length - 1) {

        scrollGuide.innerHTML = `
            <span>RETURN TO SURFACE</span>
            <span class="arrow">↑</span>
        `;

    } else {

        scrollGuide.innerHTML = `
            <span>SCROLL TO DESCEND</span>
            <span class="arrow">↓</span>
        `;
    }

    // 화살표 클릭
    const arrow = scrollGuide.querySelector(".arrow");

    arrow.addEventListener("click", function() {

        if (isScrolling) return;

        if (current === sections.length - 1) {

            current = 0;
            moveSection();

        } else {

            nextSection();

        }

    });
}


// 다음 섹션
function nextSection() {

    if (isScrolling) return;

    if (current >= sections.length - 1) return;

    current++;

    moveSection();
}


// 이전 섹션
function prevSection() {

    if (isScrolling) return;

    if (current <= 0) return;

    current--;

    moveSection();
}


// 마우스 휠
window.addEventListener("wheel", function(e) {

    if (isScrolling) return;

    if (e.deltaY > 0) {

        nextSection();

    } else {

        prevSection();

    }

}, { passive: true });


// 처음 안내 표시
updateScrollGuide();
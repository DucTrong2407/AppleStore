var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const imgs = document.querySelectorAll(".slider-img");
const imgsiPhone = document.querySelectorAll(".slider-img-iPhone");
const imgsiPad = document.querySelectorAll(".slider-img-iPad");
const imgsMac = document.querySelectorAll(".slider-img-Mac");
const imgsWatch = document.querySelectorAll(".slider-img-Watch");
const imgsAirpods = document.querySelectorAll(".slider-img-Airpods");
const imgsPhukien = document.querySelectorAll(".slider-img-Phukien");

// img Trang chủ
const imgPaths = {
    desktop: ["./assets/img/Slider/slider-5.jpg", "./assets/img/Slider/slider-1.jpg", "./assets/img/Slider/slider-2.jpg", "./assets/img/Slider/slider-3.jpg", "./assets/img/Slider/slider-4.jpg"],
    mobile: ["./assets/img/Slider/slider-5_mobile.jpg", "./assets/img/Slider/slider-1_mobile.jpg", "./assets/img/Slider/slider-2_mobile.jpg", "./assets/img/Slider/slider-3_mobile.jpg", "./assets/img/Slider/slider-4_mobile.jpg"],
};
// img iPhone
const imgPaths_iPhone = {
    desktop: ["./assets/img/Slider/slider-iPhone-1.jpg", "./assets/img/Slider/slider-iPhone-2.jpg"],
    mobile: ["./assets/img/Slider/slider-iPhone-1-mobile.jpg", "./assets/img/Slider/slider-iPhone-2-mobile.jpg"],
};
// img iPad
const imgPaths_iPad = {
    desktop: ["./assets/img/Slider/slider-iPad-1.jpg", "./assets/img/Slider/slider-iPad-2.jpg"],
    mobile: ["./assets/img/Slider/slider-iPad-1-mobile.jpg", "./assets/img/Slider/slider-iPad-2-mobile.jpg"],
};
// img Mac
const imgPaths_Mac = {
    desktop: ["./assets/img/Slider/slider-Mac-1.jpg", "./assets/img/Slider/slider-Mac-2.jpg", "./assets/img/Slider/slider-Mac-3.jpg", "./assets/img/Slider/slider-Mac-4.jpg"],
    mobile: ["./assets/img/Slider/slider-Mac-1-mobile.jpg", "./assets/img/Slider/slider-Mac-2-mobile.jpg", "./assets/img/Slider/slider-Mac-3-mobile.jpg", "./assets/img/Slider/slider-Mac-4-mobile.jpg"],
};
// img Watch
const imgPaths_Watch = {
    desktop: ["./assets/img/Slider/slider-Watch-1.jpg", "./assets/img/Slider/slider-Watch-2.jpg"],
    mobile: ["./assets/img/Slider/slider-Watch-1-mobile.jpg", "./assets/img/Slider/slider-Watch-2-mobile.jpg"],
};
// img Airpods
const imgPaths_Airpods = {
    desktop: ["./assets/img/Slider/slider-Airpods-1.jpg"],
    mobile: ["./assets/img/Slider/slider-Airpods-1-mobile.jpg"],
};
// img Phukien
const imgPaths_Phukien = {
    desktop: ["./assets/img/Slider/slider-Phukien-1.jpg"],
    mobile: ["./assets/img/Slider/slider-Phukien-1-mobile.jpg"],
};

//Duyệt qua tất cả img Trang chủ và thay đổi src ở kích thước 739px trở xuống
function checkSize() {
    if (window.innerWidth < 767) {
        imgs.forEach((img, index) => {
            img.src = imgPaths.mobile[index];
        });
    } else {
        imgs.forEach((img, index) => {
            img.src = imgPaths.desktop[index];
        });
    }
}

window.addEventListener("resize", checkSize);
checkSize();

// Duyệt qua tất cả img iPhone
function checkSizeiPhone() {
    if (window.innerWidth < 767) {
        imgsiPhone.forEach((img, index) => {
            img.src = imgPaths_iPhone.mobile[index];
        });
    } else {
        imgsiPhone.forEach((img, index) => {
            img.src = imgPaths_iPhone.desktop[index];
        });
    }
}

window.addEventListener("resize", checkSizeiPhone);
checkSizeiPhone();

// Duyệt qua tất cả img iPad
function checkSizeiPad() {
    if (window.innerWidth < 767) {
        imgsiPad.forEach((img, index) => {
            img.src = imgPaths_iPad.mobile[index];
        });
    } else {
        imgsiPad.forEach((img, index) => {
            img.src = imgPaths_iPad.desktop[index];
        });
    }
}

window.addEventListener("resize", checkSizeiPad);
checkSizeiPad();

// Duyệt qua tất cả img Mac
function checkSizeMac() {
    if (window.innerWidth < 767) {
        imgsMac.forEach((img, index) => {
            img.src = imgPaths_Mac.mobile[index];
        });
    } else {
        imgsMac.forEach((img, index) => {
            img.src = imgPaths_Mac.desktop[index];
        });
    }
}

window.addEventListener("resize", checkSizeMac);
checkSizeMac();

// Duyệt qua tất cả img Watch
function checkSizeWatch() {
    if (window.innerWidth < 767) {
        imgsWatch.forEach((img, index) => {
            img.src = imgPaths_Watch.mobile[index];
        });
    } else {
        imgsWatch.forEach((img, index) => {
            img.src = imgPaths_Watch.desktop[index];
        });
    }
}

window.addEventListener("resize", checkSizeWatch);
checkSizeWatch();

// Duyệt qua tất cả img Phukien
function checkSizePhukien() {
    if (window.innerWidth < 767) {
        imgsPhukien.forEach((img, index) => {
            img.src = imgPaths_Phukien.mobile[index];
        });
    } else {
        imgsPhukien.forEach((img, index) => {
            img.src = imgPaths_Phukien.desktop[index];
        });
    }
}

window.addEventListener("resize", checkSizePhukien);
checkSizePhukien();

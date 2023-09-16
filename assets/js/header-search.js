const searchBtn = document.querySelector(".js-search");
const modalSearch = document.querySelector(".modal-search");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

//Hàm hiển thị modal Search (thêm class open vào modal-search)
searchBtn.onclick = function () {
    modalSearch.classList.add("open");
};

//Nghe hành vi click nút button Close
modalClose.onclick = function () {
    modalSearch.classList.remove("open");
};
modalSearch.onclick = function () {
    modalSearch.classList.remove("open");
};

// Click bên ngoài Container-modal sẽ bị Close
modalContainer.onclick = function (event) {
    event.stopPropagation();
};

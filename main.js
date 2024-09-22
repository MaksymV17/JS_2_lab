"use strict";

// Модальне вікно
var openModalBtn = document.getElementById('open-modal-btn');
var closeModalBtn = document.getElementById('close-modal-btn');
var modal = document.getElementById('modal');
var modalOverlay = document.getElementById('modal-overlay');
openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
});
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});
// Подія прокрутки (scroll)
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
    else {
        header.style.backgroundColor = '#333';
    }
});

// Fetch API для отримання даних з jsonplaceholder
var dataContainer = document.getElementById('data-container');
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/posts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    data.slice(0, 5).forEach(function (post) {
                        var postElement = document.createElement('div');
                        postElement.innerHTML = "<h3>".concat(post.title, "</h3><p>").concat(post.body, "</p>");
                        dataContainer.appendChild(postElement);
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error fetching data:', error_1);
                    return [2 /*return*/];
            }
        });
    });
}
fetchData();

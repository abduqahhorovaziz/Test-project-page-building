/* Фильтр на мобилный устройствах */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

/* Клик по кнопке для скрытия / показа фильтра и изменения иконки */
sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}

/* Показать еще 3 карточки */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');


btnShowMoreCards.addEventListener('click', () => {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
})

/* Показать/скрыть контент внутри виджетов */
const widgets = document.querySelectorAll('.widget');

widgets.forEach((widget) => {
    widget.addEventListener('click', (e) => {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})

/* Location - кнопке "Любая" */
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

/* Выбор кнопки "Любая" и отключение других чекбоксов */
checkBoxAny.addEventListener('change', () => {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach((item) => {
            item.checked = false;
        });
    }
})

/* Отключаем кнопку "Любая", при выборе других параметров  */
topLocationCheckboxes.forEach((item) => {
    item.addEventListener('change', () => {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
})


const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault();

    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = "Скрыть допольнительные опции";
        showMoreOptions.dataset.options = 'visible';
    }

    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = "Показать ещё";
        showMoreOptions.dataset.options = 'hidden';
    }
}
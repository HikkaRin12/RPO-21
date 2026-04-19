// const searchByTag = document.querySelector('div');
// const searchByAll = document.querySelectorAll('div');

// console.log(searchByTag); // будет найден только первый элемент, даже если таких элементов несколько
// console.log(searchByAll);// будет найдено все элементы, так как querySelectorAll возвращает коллекцию всех найденных элементов

// const searchByClass = document.querySelector('.general-container');
// console.log(searchByClass);// . - это символ для поиска элемента по классу, так как класс может быть у нескольких элементов, то будет найден только первый элемент, даже если таких элементов несколько

// const searchById = document.querySelector('#container');
// console.log(searchById); // # - это символ для поиска элемента по id, так как id должен быть уникальным, то будет найден только один элемент, даже если таких элементов несколько

// const searchByAttribute = document.querySelector('[id="container"]');
// console.log(searchByAttribute); // [] - это символ для поиска элемента по атрибуту, в данном случае мы ищем элемент с атрибутом id, который равен container, так как id должен быть уникальным, то будет найден только один элемент, даже если таких элементов несколько


const paragraph = document.createElement('p');
paragraph.classList.add("active");
paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem culpa illum praesentium consequatur quos reiciendis optio officia nemo asperiores at impedit, pariatur dolor facere molestiae vitae nam. Dolor, autem ut.";
paragraph.style.textTransform = "uppercase";

// document.body.append(paragraph);
divContainerById.append(paragraph); // добавляем элемент в конец контейнера, который мы нашли по id


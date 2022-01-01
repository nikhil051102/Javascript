// 1. Getting Elements by Class Name and ID

// let title = document.getElementsByClassName('title');

// console.log(Array.isArray(title));                  //This method is used to check whether the given parameter is an array or not.

// console.log(Array.isArray(Array.from(title)));     //This method is used to typecast the given parameter to an array.

// Array.from(title).forEach(function(element)
// {
//     console.log(element);
// });


//2. Query Selector 
// --> querySelector only returns the first element that matches the given CSS selector.
// const query = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(query);

// --> querySelectorAll returns all the elements that matches the given CSS selector.
// var query = document.querySelectorAll('#book-list li .name');
// console.log(query);


//3. Editing HTML and Text using DOM
var books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book)
{
    console.log(book.textContent);
});

Array.from(books).forEach(function(book)
{
    book.textContent += ' (book title)';
});

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
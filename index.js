class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let books = [];

const form = document.getElementById('form');

if ('booksData' in localStorage) {
  books = JSON.parse(localStorage.booksData);
}

const addBook = () => {
  books.push(new Book(form[0].value, form[1].value));
  localStorage.setItem('booksData', JSON.stringify(books));
};


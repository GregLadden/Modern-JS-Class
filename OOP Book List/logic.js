// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

//Book Creation
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="deleteBtn">X</a></td>
  `;
  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function (message, className) {
  const div = document.createElement("div");
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  container.insertBefore(div, form);

  //Remove alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 2000);
};

// Delete Book
UI.prototype.removeBook = function (target) {
  if (target.className === "deleteBtn") {
    target.parentElement.parentElement.remove();
  }
};

//Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Add Book
function addBook(e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert("Book Added", "success");
  }
  e.preventDefault();
}

// Delete Book
function deleteBook(e) {
  const ui = new UI();

  ui.removeBook(e.target);
  ui.showAlert("Book Remove", "success");
}

//Event Listeners
document.getElementById("book-form").addEventListener("submit", addBook);
document.getElementById("book-list").addEventListener("click", deleteBook);

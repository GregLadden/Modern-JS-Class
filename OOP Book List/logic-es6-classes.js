class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="deleteBtn">X</a></td>
  `;
    list.appendChild(row);
  }

  showAlert(message, className) {
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
  }

  removeBook(target) {
    if (target.className === "deleteBtn") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

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

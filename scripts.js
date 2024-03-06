document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("book-list");
    const addBookForm = document.getElementById("add-book-form");

    addBookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        if (title && author) {
            addBookToList(title, author);
            addBookForm.reset();
        } else {
            alert("Please fill in both title and author fields.");
        }
    });

    function addBookToList(title, author) {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <h3>${title}</h3>
            <p>Author: ${author}</p>
        `;
        bookList.appendChild(bookItem);
    }
});

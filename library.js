let myLibrary = [];
const container = document.querySelector('#container');

//Object constructor
function Book(title, author, pages, read) {
    this.Title = title
    this.Author = author
    this.Pages = pages
    this.Read = read
}

//Adding an intial book to test stuff
function addBookToLibrary(input) {
    myLibrary.push(input);
    return;
}
const book0 = new Book('A Game of Thrones', 'George R.R. Martin', 694, true);
addBookToLibrary(book0);
createCard();
//button that prompts user to enter information, will make it call a pop up to store information
const addBook = document.querySelector('#newbook')
const popup = document.querySelector('.form-popup');
const save = document.querySelector('#savebook')
//opens and closes forms that input information for new books
addBook.addEventListener('click', () => {
    popup.style.display = 'block';
});
function closePopup () {
    popup.style.display = 'none';
}

// addBook.addEventListener('click', () => {
//     let titleInput = prompt('Enter title of book', '');
//     let authorInput = prompt('Enter author of book', '');
//     let pageInput = prompt('Enter total pages in book', '');
//     let readInput = prompt('Have you read the book?')
//     let book = new Book(titleInput, authorInput, pageInput, readInput);
//     addBookToLibrary(book); //adds book to intial array
//     addPosition();  //then adds a position to each book item bc I'm don't know a way to dynamically alter the names of each variable
//     createCard();
// })

function addPosition () {
    let libraryLength = myLibrary.length;
    for(let i = 0; i < libraryLength; i++) {
            myLibrary[i].position = i;
    }
    return;
}

function createCard () {
    let lastBook = myLibrary.length - 1;
    let card = document.createElement('div');
    card.classList.add('card')
    //loops through all the keys in the last object created to get the values and add it to the newly created card
    for(key in myLibrary[lastBook]) {
        if(key != 'position') {
            let attribute = document.createElement('div')
            attribute.textContent = `${key}: ${myLibrary[lastBook][key]}`;
            card.appendChild(attribute)
        }
    }
    //button that once pressed, deletes the card that it was created with
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    card.appendChild(deleteBtn);
    card.appendChild(editBtn);
    container.appendChild(card);
}
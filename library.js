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
    popup.style.display = 'flex';
});
save.addEventListener('click', () => {
    saveBook();
    popup.style.display = 'none';
});

function closePopup() {
    popup.style.display = 'none';
}

let info = document.querySelectorAll('.field')
function saveBook () {
    let titleInput = info[0].value;
    let authorInput = info[1].value;
    let pageInput = info[2].value;
    let readInput = info[3].checked;
    let book = new Book(titleInput, authorInput, pageInput, readInput);
    for(let i = 0; i < (info.length - 1); i++) {
        info[i].value = '';
    }
    info[3].checked = false;
    addBookToLibrary(book);
    addPosition();
    createCard();
}

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

    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = `${myLibrary[lastBook]['Title']}`;
    card.appendChild(title);

    //loops through all the keys in the last object created to get the values and add it to the newly created card
    for(key in myLibrary[lastBook]) {
        if(key == 'Author' || key == 'Pages') {
            let attribute = document.createElement('div')
            attribute.classList.add('bookData');
            attribute.textContent = `${key}: ${myLibrary[lastBook][key]}`;
            card.appendChild(attribute)
        }
    }
    
    //creates a read button that toggle status when book is read or not
    let read = document.createElement('button');
    read.classList.add('readButton');
    read.textContent = 'Not Read';
    if(myLibrary[lastBook]['Read'] == true) {
        title.style.background = '#4889da';
        read.classList.toggle('readOn');
        read.textContent = 'Read';
    }
    read.addEventListener('click', () => {
        read.classList.toggle('readOn');
        if(read.textContent == 'Read') {
            read.textContent = 'Not Read'
            title.style.background = 'goldenrod';
        } else {
            read.textContent = 'Read'
            title.style.background = '#4889da';
        }
    });
    let buttons = document.createElement('div')
    buttons.classList.add('buttonsBox');
    card.appendChild(buttons)
    buttons.appendChild(read);

    //button that once pressed, deletes the card that it was created with
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });
    buttons.appendChild(deleteBtn);
    container.appendChild(card);
}


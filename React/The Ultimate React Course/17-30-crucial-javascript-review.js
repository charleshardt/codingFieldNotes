const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(3);
const { title, author, publicationDate, pages, genres, hasMovieAdaptation } =
  book;

const updatedBook = {
  ...book,

  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // overwriting the value of a property
  pages: 1210,
};
updatedBook;

// Short circuiting Review

// And
console.log(false && "Some str");
console.log(hasMovieAdaptation && "This book has been adapted for film.");

console.log(true && "And return the first falsy thing, or the last thing.");
console.log(false && "And return the first falsy thing, or the last thing.");

// Or: null, undefined, zero, empty string
console.log(true || "Or return the first true thing.");
console.log(false || "Or return the first true thing.");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "not translated";
spanishTranslation;

// Nullish coalescing: null or undefined, not zero or empty string
// const count = book.reviews.librarything.reviewsCount ?? "no data"; // error: Cannot read properties of undefined
// console.log(count);

// Optional chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount;
  return goodreads + librarything;
}

// getTotalReviewCount(book);

const books = getBooks();

// .map()
const x2 = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x2);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// .filter()
const longBooksAndMovie = books
  .filter((book) => book.pages >= 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksAndMovie;

const adventureBooksTitles = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooksTitles;

// .reduce()
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// .sort()
// mutates the original array
let numbers = [1, 5, 3, 10, 6, 3, 9];
let numbersAsc = numbers.sort((a, b) => a - b);
numbersAsc;
numbers;

const numbersDesc = numbers.sort((a, b) => b - a);
numbersDesc;
numbers;

// use slice() to make a copy so you don't mutate the original
numbers = [1, 5, 3, 10, 6, 3, 9];
numbersAsc = numbers.slice().sort((a, b) => a - b);
numbersAsc;
numbers;

const sortedByPagesAsc = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPagesAsc;

const sortedByPagesDesc = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPagesDesc;

// Create a book objet in the array of books
const newBook = {
  id: 6,
  title: "The Three Muskateers",
  publicationDate: "1850-01-01",
  author: "Something-or-other Dumas",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// Delete a book object in the array of books
const booksAfterDelete = books.filter((book) => book.id !== 3);
booksAfterDelete;

// Update a book object in the array of books
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1227, hasMovieAdaptation: false } : book,
);
booksAfterUpdate;

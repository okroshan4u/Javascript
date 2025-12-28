const books = [
  {
    title: "1984",
    genre: "Dystopian",
    author: "George Orwell",
    publishingYear: 1949,
    currentEditions: 35
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    author: "Aldous Huxley",
    publishingYear: 1932,
    currentEditions: 28
  },
  {
    title: "Fahrenheit 451",
    genre: "Dystopian",
    author: "Ray Bradbury",
    publishingYear: 1953,
    currentEditions: 22
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    author: "J.R.R. Tolkien",
    publishingYear: 1937,
    currentEditions: 45
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    author: "J.K. Rowling",
    publishingYear: 1997,
    currentEditions: 50
  },
  {
    title: "The Name of the Wind",
    genre: "Fantasy",
    author: "Patrick Rothfuss",
    publishingYear: 2007,
    currentEditions: 18
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    author: "Jane Austen",
    publishingYear: 1813,
    currentEditions: 25
  },
  {
    title: "Me Before You",
    genre: "Romance",
    author: "Jojo Moyes",
    publishingYear: 2012,
    currentEditions: 12
  },
  {
    title: "The Fault in Our Stars",
    genre: "Romance",
    author: "John Green",
    publishingYear: 2012,
    currentEditions: 20
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    author: "Harper Lee",
    publishingYear: 1960,
    currentEditions: 40
  }
];

// const filteredItem = books.filter((book)=> book.currentEditions == 40);
// const filteredItem = books.filter((book)=> book.currentEditions == 40 && book.genre == "Fiction");
// const filteredItem = books.filter((book)=> book.genre == "Romance" || book.genre == "Fantasy");
// const filteredItem = books.filter((book)=> book.author.includes("R"));
// const filteredItem = books.filter((book)=> book.author.startsWith("R"));
// const filteredItem = books.filter((book)=> book.author.startsWith("J"));
// const filteredItem = books.filter((book)=> book.author.endsWith("N".toLowerCase()));

// applying regex

// const filteredItem = books.filter((book)=> book.author.endsWith("N".toLowerCase()));

console.log(filteredItem)
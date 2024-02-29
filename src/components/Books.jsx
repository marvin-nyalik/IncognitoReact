import { useState, useEffect } from "react";

const Books = () => {
  const booksData = [
    { author: 'Eunniah Mbabazi', title: 'Breaking Down', year: 1968, category: 'Fiction' },
    { author: 'Chinua Achebe', title: 'Things Fall Apart', year: 1975, category: 'Non-fiction' },
    { author: 'Chinua Achebe', title: 'The River Between', year: 1960, category: 'Folklore' },
    { author: 'Mbongeni Ngema', title: 'Themes of Sarafina', year: 1982, category: 'Science Fiction' },
    { author: 'Marvin Nyalik', title: 'Lyrical Labyrinth', year: 2005, category: 'Fairytales' },
  ];

  const [filter, setFilter] = useState({
    author: '',
    title: '',
    year: '',
    category: ''
  });

  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [sortBy, setSortBy] = useState('year');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    const filterResult = booksData.filter(book => 
      book.author.toLowerCase().includes(filter.author.trim().toLowerCase()) &&
      book.category.toLowerCase().includes(filter.category.trim().toLowerCase()) &&
      book.title.toLowerCase().includes(filter.title.trim().toLowerCase()) &&
      (filter.year === '' || book.year.toString().includes(filter.year.trim())))
    
    filterResult.sort((a,b) => {
      if (sortBy === 'year'){
        const valueA = a[sortBy].toString().toLowerCase()
        const valueB = b[sortBy].toString().toLowerCase()

        return valueA.localeCompare(valueB);
      }
      const valueA = a[sortBy].toLowerCase()
      const valueB = b[sortBy].toLowerCase()
      
      return valueA.localeCompare(valueB);
    });

    setFilteredBooks(filterResult);
  },
  [filter, sortBy])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
    <div>
      <input type="text" name="author" placeholder="Author" onChange={handleInputChange} />
      <input type="text" name="title" placeholder="Title" onChange={handleInputChange} />
      <input type="text" name="year" placeholder="Year" onChange={handleInputChange} />
      <input type="text" name="category" placeholder="Category" onChange={handleInputChange} />
      <select value={sortBy} onChange={handleSortChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
        <option value="category">Category</option>
      </select>
    </div>
    {filteredBooks && filteredBooks.map((book) => (
      <div key={book.title}>
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
        <p>Category: {book.category}</p>
      </div>
    ))}
    </>
  )
}

export default Books;

import { useState, useEffect } from "react";

const Books = ({ books }) => {
  const [filter, setFilter] = useState({
    author: '',
    title: '',
    year: '',
    category: ''
  });

  const [filteredBooks, setFilteredBooks] = useState(books);
  const [sortBy, setSortBy] = useState('year');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    const filterResult = books.filter(book => 
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
    <h1 className="text-xl">All Books</h1>
    <div className="mx-auto max-w-[90%] flex flex-col space-x-4 md:flex-row">
      <input type="text" name="author" placeholder="Author" onChange={handleInputChange}
       className="border border-black-700 rounded-xl my-2 px-1" />
      <input type="text" name="title" placeholder="Title" onChange={handleInputChange} 
      className="border border-black-700 rounded-xl my-2 px-1"/>
      <input type="text" name="year" placeholder="Year" onChange={handleInputChange} 
      className="border border-black-700 rounded-xl my-2 px-1"/>
      <input type="text" name="category" placeholder="Category" onChange={handleInputChange} 
      className="border border-black-700 rounded-xl my-2 px-2"/>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
        <option value="category">Category</option>
      </select>
    </div>
    {filteredBooks && filteredBooks.map((book) => (
      <div key={book.title}
      className="mx-auto max-w-[90%] flex flex-col space-x-4 space-y-4 my-4 border-b border-b-teal-500 border-pink-500">
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

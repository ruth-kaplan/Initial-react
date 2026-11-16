const books = [
    {id: 2025,title: "hello",author: "Rut",year: 2025,price: 150},
    {id: 2015,title: "Bye",author: "Tamar",year: 2023,price: 200},
    {id: 2023,title: "Goodbye",author: "Shira",year: 2012,price: 130}
]

function BooksTable() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>     
                            <td>{book.title}</td>                            
                            <td>{book.author}</td>                            
                            <td>{book.year}</td>                            
                            <td>{book.price}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default BooksTable
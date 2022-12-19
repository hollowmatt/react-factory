
function List({items, handleDelete}) {
    if(!items.length) {
        return(
            <h2>Nothing ToDo, go out and play!</h2>
        )
    } 
    return(
        <div>
            <h2>{items.length} item(s) to do</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Due Date</th>
                        <th>Options</th>
                    </tr>
                </thead>
                {items.map(item => (
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.date}</td>
                        <td>
                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )    
}

export default List;
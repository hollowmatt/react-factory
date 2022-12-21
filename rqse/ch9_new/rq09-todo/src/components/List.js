
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
                        <th>Urgent?</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {items.map(item => (
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.isUrgent? 'yes' : 'no'}</td>
                        <td>{item.priority}</td>
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
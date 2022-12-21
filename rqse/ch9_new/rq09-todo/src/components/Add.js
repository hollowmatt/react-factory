import { useState } from 'react';

function Add({handleAdd, handleCancel}) {
    const [data, setData] = useState({
        title: '',
        isUrgent: false,
        priority: '',
    });
    const priorities = ['low', 'medium','high', 'urgent'];
    const onChangeTitle = (evt) => {
        setData(oldData => ({ ...oldData, title: evt.target.value}));
    };
    const onChangeUrgent = (evt) => {
        setData(oldData => ({ ...oldData, isUrgent: evt.target.checked}));
    };
    const onChangePriority = (evt) => {
        setData(oldData => ({ ...oldData, priority: evt.target.value}));
    }
    const onSubmit = (evt) => {
        handleAdd(data);
        evt.preventDefault();
    };
    
    return(
        <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <label>
                Title:
                <input value={data.title} name="title" onChange={onChangeTitle}/>
            </label>
            <label>
                Urgent:
                <input type="checkbox" checked={data.isUrgent} onChange={onChangeUrgent}/>
            </label>
            <label>
                Priority:
                <select value={data.priority} name="priority" onChange={onChangePriority}>
                {priorities.map(priority => (
                    <option value={priority}>{priority}</option>
                ))}
                </select>
            </label>
            <div>
                <button>Submit</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default Add;
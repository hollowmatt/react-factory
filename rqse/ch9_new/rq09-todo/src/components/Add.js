import { useState } from 'react';

function Add({handleAdd, handleCancel}) {
    const [data, setData] = useState({
        title: '',
        people: [],
        description: '',
        isUrgent: false,
        priority: '',
    });
    const priorities = ['low', 'medium','high', 'urgent'];
    const people = ['Catnip', 'Milkshake', 'Shivers', 'Bella'];
    const onChange = (evt) => {
        const key = evt.target.name;
        const value = evt.target.value;
        setData(oldData => ({ ...oldData, [key]: value}));
    };
    const onChangeUrgent = (evt) => {
        setData(oldData => ({ ...oldData, isUrgent: evt.target.checked}));
    };
    const onChangePeople = (evt) => {
        const value = Array.from(evt.target.selectedOptions).map(opt => opt.value);
        setData(oldData => ({ ...oldData, people: value}));
    };
    
    const onSubmit = (evt) => {
        handleAdd(data);
        evt.preventDefault();
    };
    
    return(
        <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <label>
                Title:
                <input value={data.title} name="title" onChange={onChange}/>
            </label>
            <label>
                Urgent:
                <input type="checkbox" checked={data.isUrgent} onChange={onChangeUrgent}/>
            </label>
            <label>
                Priority:
                <select value={data.priority} name="priority" onChange={onChange}>
                {priorities.map(priority => (
                    <option value={priority}>{priority}</option>
                ))}
                </select>
            </label>
            <label>
                People:
                <select value={data.people} name={people} onChange={onChangePeople} multiple>
                {people.map(person => (
                    <option>{person}</option>
                ))}
                </select>
            </label>
            <label>
                Description:
                <textarea value={data.description} name="description" onChange={onChange}/>
            </label>
            <div>
                <button>Submit</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default Add;
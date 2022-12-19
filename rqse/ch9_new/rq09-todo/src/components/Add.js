import { useState } from 'react';

function Add({handleAdd, handleCancel}) {
    return(
        <form>
            <label>
                <input />
            </label>
            <label>
                <input />
            </label>
            <label>
                <input />
            </label>
            <div>
                <button type='button' onClick={handleAdd}>Submit</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default Add;
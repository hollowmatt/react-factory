import React from 'react';

class MessageInput extends React.Component {
    state = {
        value: '',
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    };

    handleSubmit = () => {
        this.props.store.dispatch({
            type: 'ADD_MESSAGE',
            message: this.state.value,
        });
        this.setState({
            value: '',
        });
    };

    render() {
        return(
            <div className='ui input'>
                <input autoFocus
                    onChange={this.onChange}
                    value={this.state.value}
                    type='text'
                />
                <button
                    onClick={this.handleSubmit}
                    className='ui primary button'
                    type='submit'
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default MessageInput;


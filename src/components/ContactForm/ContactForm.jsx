import React, { Component } from 'react';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    render() {
        return (
            <div>
            <input type="text" name="name" required />
                <button type="submit"> Add contact</button>
                </div>
        )
    }

}


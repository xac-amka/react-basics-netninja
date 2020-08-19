import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        const { contacts } = this.props;
        const contactList = contacts.length ? (
            contacts.map(contact => (
                <div key={contact.id} className="contact card">
                    <div className="card-content">
                        <Link to={'/contacts/' + contact.id} className="pink-text darken-5">
                            <span className="card-title">{contact.name}</span>
                        </Link>
                        <p>{contact.number}</p>
                    </div>
                </div>
                ))
            ) : (
                <div className="center">You don't have any contacts :(</div>
        )
        return (
            <div className="container">
                <h4 className="center">This is my Contact page </h4>
                { contactList }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(Contact);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../actions/contactActions';

class ContactDetails extends Component {
    handleClick = (e) => {
        this.props.deleteContact(this.props.contact.id);
        this.props.history.push('/contact')
    }

    render() {
        console.log(this.props);
        const contact = this.props.contact ? (
            <div className="contact card bg-red">
                <div className="card-content">
                    <h1 className="card-title red-text">{this.props.contact.name}</h1>
                    <h3>{this.props.contact.number}</h3>
                    <div className="center">
                        <button className="btn grey" onClick={this.handleClick}>delete</button>
                    </div>
                </div>
            </div>
        ) : ( 
            <div className="center">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <div className="container">
                { contact }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.contact_id;
    return {
        contact: state.contacts.find(contact => contact.id == id)
    }
}

const maptDispatchToProps = (dispatch) => {
    return {
        deleteContact: (id) => {
            // dispatch({ type: DELETE_CONTACT, payload: id })
            dispatch(deleteContact(id))
        }
    }
}

export default connect(mapStateToProps, maptDispatchToProps)(ContactDetails);
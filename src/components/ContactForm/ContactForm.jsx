// import PropTypes from 'prop-types';
import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = e => {
    e.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.props;
    const isValidatedForm = this.validateForm();
    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, phone });
    this.resetForm();
  };
  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert('Some filed is empty');
      return false;
    }
    return onCheckUnique(name);
  };
  resetForm = () => this.setState(INITIAL_STATE);
  render() {
    const { name, phone } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleFormSubmit}>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          className={s.input}
          type="tel"
          name="phone"
          placeholder="Enter phone"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
export default ContactForm;

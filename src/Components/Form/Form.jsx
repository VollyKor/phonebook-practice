import s from './Form.module.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class Form extends Component {
  state = {
    name: '',
    phoneNumber: '',
  };

  handleChange = e => {
    let id = e.target.dataset.id;
    this.setState(prevState => {
      return {
        // ...prevState,
        [id]: e.target.value,
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const addContact = this.props.onSubmit;
    const { name, phoneNumber } = this.state;

    if (name.length > 0 && phoneNumber.length > 0) {
      addContact({
        id: uuidv4(),
        name,
        phoneNumber,
      });
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({ name: '', phoneNumber: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span>Name</span>
          <input
            type="text"
            className={s.input}
            value={this.state.name}
            onChange={this.handleChange}
            data-id="name"
          />
        </label>
        <label className={s.label}>
          <span>Phone number</span>
          <input
            type="text"
            className={s.input}
            value={this.state.phoneNumber}
            onChange={this.handleChange}
            data-id="phoneNumber"
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

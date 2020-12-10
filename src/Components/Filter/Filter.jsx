import s from './Filter.module.css';
import React, { Component } from 'react';

export default class Filter extends Component {
  handleFilter = e => {
    const { setFilter } = this.props;
    setFilter(e.target.value);
  };

  render() {
    const { filter } = this.props.data;
    return (
      <div className="filter">
        <label className={s.label}>
          <span>Filter </span>
          <input
            type="text"
            className={s.input}
            value={filter}
            onChange={this.handleFilter}
          />
        </label>
      </div>
    );
  }
}
// перебор
// если содержит алерт и стоп
// если нет добавили контакт
//
//

import PropTypes from 'prop-types';
import s from './ContactList.module.css';
const ContactList = ({ contacts, onRemove }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, phone }) => (
      <li className={s.listItem} key={id}>
        <span className={s.listItemText}>{name}</span>
        <span className={s.listItemText}>:{phone}</span>
        <button className={s.btn} type="button" onClick={() => onRemove(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;

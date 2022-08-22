import React, { useState } from 'react';
import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from 'redux/contactApi';

export default function AddContactForm() {
  const [contactName, setaContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const { data } = useGetAllContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleInputChange = evt => {
    const inputName = evt.currentTarget.name;
    const inputValue = evt.currentTarget.value;
    switch (inputName) {
      case 'name':
        setaContactName(inputValue);
        break;
      case 'number':
        setContactNumber(inputValue);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const normalizedName = contactName.toLowerCase();
    if (data.some(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${contactName} is already in contacts`);
      remove();
      return;
    } else if (contactName.trim() === '' || contactNumber.trim() === '') {
      return;
    }
    const contact = {
      name: contactName,
      phone: contactNumber,
    };
    remove();
    addContact(contact);
    console.log(contact);
  };

  const remove = () => {
    setaContactName('');
    setContactNumber('');
  };

  return (
    <form action="" onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={contactName}
        onChange={handleInputChange}
        required
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={contactNumber}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterContactSlice';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactApi';

export default function ContactList() {
  const { data, error } = useGetAllContactsQuery();
  const filterContact = useSelector(getFilter);
  const [deleteContact] = useDeleteContactMutation();
  console.log(data);
  console.log(error);

  const getVisibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    console.log(data);
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const visibbleContacts = getVisibleContacts();

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {visibbleContacts &&
          !error &&
          visibbleContacts.map(({ id, name, phone }, i) => {
            return (
              <li key={id}>
                {i + 1}) {name}: {phone};
                <button type="button" onClick={() => deleteContact(id)}>
                  DELETE
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

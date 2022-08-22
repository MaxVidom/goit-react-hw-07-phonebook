import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  return (
    <div>
      <AddContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

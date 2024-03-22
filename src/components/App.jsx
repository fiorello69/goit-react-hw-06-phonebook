import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import '../index.css';

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
        <Contacts />
      </Section>
    </>
  );
};

export default App;

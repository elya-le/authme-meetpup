import './CreateGroupPage.css';
import CreateGroupForm from './CreateGroupForm';

const CreateGroupPage = () => {
  return (
    <div className='create-group-page'>
      <p>BECOME AN ORGANIZER</p><br></br>
      <h2>We&apos;ll walk you through a few steps to build your local community</h2>
      <hr></hr>
      <CreateGroupForm />
    </div>
  );
};

export default CreateGroupPage;

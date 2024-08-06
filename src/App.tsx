import './App.css';
import QuestionBubble from './components/QuestionBubble';

const fields = {
  name: {
    question: "What's your name?",
    field: (
      <>
        <input
          id='inputId'
          type='text'
          maxLength={30}
          placeholder='Type here...'
        />
        <hr className='lineBreak' />
      </>
    ),
  },
};

function App() {
  return (
    <>
      <div className='appContainer'>
        <h5 className='resoleNumber'>Resole 001</h5>
        <QuestionBubble
          question={fields.name.question}
          inputField={fields.name.field}
        />
      </div>
    </>
  );
}

export default App;

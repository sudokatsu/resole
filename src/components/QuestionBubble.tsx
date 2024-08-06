import './QuestionBubbleStyles.css';

type Props = {
  inputField: JSX.Element;
  inputSubtext?: string;
  question: string;
};

const QuestionBubble = ({ inputField, inputSubtext, question }: Props) => {
  return (
    <div className='questionBubble'>
      <h1>{question}</h1>
      <p className='inputSubtext'>{inputSubtext}</p>
      {inputField}
      <p className='enterButton'>↵</p>
    </div>
  );
};

export default QuestionBubble;

import './App.css';
import { InfoCell } from './components/InfoCell';
import { TestContainer } from './components/TestContainer';
import { UsingBooks } from './components/UsingBooks';
import { TEXT_DATA } from './shared/data/textData';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  return <>
    <div className="App">
      {
        TEXT_DATA.map((text: string, id: number) => {
          return <InfoCell key={uuidv4()} textData={text} cellId={id} />
        })
      }

      <TestContainer />

      <UsingBooks />

    </div>
  </>
}

export default App;

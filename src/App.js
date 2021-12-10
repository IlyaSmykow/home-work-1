import './App.css';
import { ProfileFunc } from './tutorial_9/Profile_Func';
import { ProfileClass } from './tutorial_9/Profile_Class';

function App() {

  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];

  return (
    <div className="App">
      <ProfileFunc name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} monthNames={monthNames}/>
      <ProfileClass name="Вася Пупкин" registredAt={new Date()} monthNames={monthNames}/>
    </div>
  );
}

export default App;

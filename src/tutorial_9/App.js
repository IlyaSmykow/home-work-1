import { ProfileFunc } from './Profile_Func';
import { ProfileClass } from './Profile_Class';

export function App() {

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
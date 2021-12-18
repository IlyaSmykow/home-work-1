import { ProfileFunc } from './Profile_Func';
import { ProfileClass } from './Profile_Class';

export function App() {

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="App">
      <ProfileFunc name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} options={options}/>
      <ProfileClass name="Вася Пупкин" registredAt={new Date()} options={options}/>
    </div>
  );
}
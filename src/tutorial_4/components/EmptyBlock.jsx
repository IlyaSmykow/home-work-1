import '../App.css';
import ghost from '../ghost.jpeg';


export const EmptyBlock = () => {
    return (
        <div className="block empty-block"><img src={ghost} width="32px" height="32px" alt="Ghost" />
            <h2>Список фраз пустой</h2>
            <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
        </div>
    )
}
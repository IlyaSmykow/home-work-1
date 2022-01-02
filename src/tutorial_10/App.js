import './styles.css';
import { UserCard } from './UserCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from './useDebounce';


export const App = () => {

    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [userData, setUserData] = useState(null);
    const debouncedSearchTerm = useDebounce(query, 500);

    const handleInput = event => {
        const { value } = event.target;
        if(value.length > 1) {
            setDisabled(false);
        } else if (value.length < 1) {
            setDisabled(true);
            setInfo('');
        }
        setQuery(value.trim());
    };

    const search = async() => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://api.github.com/users/${query}`);
            const { data } = response;
            setUserData(data);
            setIsLoading(false);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setInfo('Пользователь с таким именем не найден');
            } else {
                setInfo('Произошла ошибка');
            }
            setUserData(null);
        } finally {
            setQuery('');
            setIsLoading(false);
            setDisabled(true);
        }
    };

    const searchWithButton = async(event) => {
        setInfo('');
        event.preventDefault();
        await search();
    };

    // Если раскомментировать следующий блок, input будет работать без кнопки
    // Два разных input решил не создавать

    // useEffect(() => {
    //       if (debouncedSearchTerm) {
    //             setInfo('');
    //             search(debouncedSearchTerm);
    //       } 
    // },[debouncedSearchTerm]);

    return (
        <div className="app-container">
            <h2>Поиск пользователей сервиса GitHub</h2>

            <form className="app-form">
                <input 
                    onChange={handleInput} 
                    value={query} type="text" 
                    className="app-input" 
                    placeholder="Укажите GitHub-аккаунт" 
                />
                <button 
                    onClick={searchWithButton} 
                    className={disabled ? "app-form_disabled" : "app-form_btn"}
                    disabled={disabled}
                >
                    Найти
                </button>
            </form>
            { info && <div style={{textAlign: 'center', marginTop: '50px'}}>{info}</div>} 
            {
                isLoading ? <h3 style={{textAlign: 'center'}}>Загрузка...</h3>
                : <UserCard userData={userData}/>
            }
        </div>
    )
};
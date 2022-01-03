import { useState } from 'react';


export const App = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://61cb51cf194ffe0017788cfa.mockapi.io/users');
            const json = await response.json();
            setUsers(json);
            setIsLoading(false);
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <ul>
            {
                isLoading ? <div>Loading...</div>
                :
                users.map(obj => (
                        <li key={obj.id}>
                            {obj.id} - {obj.name}
                        </li>
                ))
            }
            </ul>
            <button onClick={getUsers}>получить список пользователей</button>
        </div>
    )
};
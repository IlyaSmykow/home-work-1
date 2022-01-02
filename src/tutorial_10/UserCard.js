import './styles.css';
import { useEffect, useState } from 'react';


export const UserCard = ({userData}) => {

    let url= new URL(window.location.href);
    const [userUrl, setUserUrl] = useState('');

    useEffect(() => {
        if(userData) {
            url.searchParams.append('login', userData.name);
            setUserUrl(url.href);
        }
    }, [userData]);

    const copyUserUrl = () => {
        if(userUrl) {
            navigator.clipboard.writeText(userUrl).then(() => {
                alert("URL скопирован!");
            });
            setUserUrl('');
        }
    };

    return (
        <>
            {
                userData ? 
                <div className="app-user">
                    <div className="app-user_info">
                        <div className="app-user_image">
                            <img src={userData.avatar_url} alt="user_avatar" />
                        </div>
                        <div className="app-user_data">
                        <h1 className="app-user_name">
                            {userData.name}
                            <span>{userData.login}</span>
                        </h1>
                        <p className="app-user_about">
                            {userData.bio}
                        </p>
                        </div>
                    </div>
                    <ul className="app-user_stats">
                        <li className="app-user_stats-item">
                        Репозитории
                        <span>{userData.public_repos}</span>
                        </li>
                        <li className="app-user_stats-item">
                        Подписчиков
                        <span>{userData.followers}</span>
                        </li>
                        <li className="app-user_stats-item">
                        Звёзд
                        <span>{userData.public_repos}</span>
                        </li>
                    </ul>
                    <ul className="app-user_location">
                        <li className="app-user_location-item">{userData.location}</li>
                        <li className="app-user_location-item">
                        {
                            userData.blog ? <a href={userData.blog}>{userData.blog}</a> : null
                        }
                        </li>
                        {
                            userUrl && <li><input defaultValue={userUrl} readOnly={true}/>
                                                <span onClick={copyUserUrl}>копировать</span>
                                        </li>
                        }
                    </ul>
                </div> 
                : 
                null
            }
        </>
        
    )
};
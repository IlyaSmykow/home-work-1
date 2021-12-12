import styles from './app.module.css';


export const App = () => {

    let email = "";
    let password = "";

    const handleChange = (event) => {
        if(event.target.name === "email") {
            email = event.target.value;
        } else if (event.target.name === "password") {
            password = event.target.value;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(email && password) {
            console.log({ email, password });
            document.getElementById('form').reset();
            email = "";
            password = "";
        } else {
            alert("Заполните все поля формы!");
        }
    };

    return (
        <form className={styles.app_form} onSubmit={handleSubmit} id="form">
            <input name="email" type="text" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Пароль" onChange={handleChange} />
            <button type="submit">Войти</button>
        </form>
    )
}
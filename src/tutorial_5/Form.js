import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styles from './App.module.scss';


export const Form = ({getComments}) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const defaultValues = {
        name: "",
        email: "",
        text: "",
        createdAt: new Date().toLocaleDateString('ru-RU', options),
    };

    const [formValues, setFormValues] = useState(defaultValues);
    const [comments, setComments] = useState([]);

    const sendCommentsToApp = () => {
        if (getComments) {
            getComments(comments);
            setComments([]);
        }
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        comments.push(formValues);
        sendCommentsToApp(comments);
        setFormValues(defaultValues);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form__wrapper}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>

                    <Typography sx={{ fontSize: 20 }} gutterBottom>
                    Обратная связь:
                    </Typography>

                    <TextField 
                        id="name-input"
                        name="name"
                        label="Имя"
                        type="text"
                        value={formValues.name}
                        onChange={handleInputChange}
                        variant="outlined" 
                        fullWidth 
                        className={styles.form__input_first}
                    />
                    <TextField 
                        id="name-input"
                        name="email"
                        label="Почта"
                        type="text"
                        value={formValues.email}
                        onChange={handleInputChange}
                        variant="outlined" 
                        fullWidth 
                        className={styles.form__input_second}
                    />
                    <TextField 
                        id="name-input"
                        name="text"
                        label="Текст"
                        type="text"
                        value={formValues.text}
                        onChange={handleInputChange}
                        variant="outlined" 
                        fullWidth 
                        className={styles.form__input_text}
                    />

                </CardContent>
                <CardActions>
                    <Button type="submit" variant="contained">Отправить</Button>
                </CardActions>
            </Card>
        </form>
    )
};
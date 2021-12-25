import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./styles.css";

export const App = () => {

    const { handleSubmit, register, formState, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
    <div className="App">
        <form>
            <div className="row">
            <TextField
                name="firstName"
                label="Имя"
                {...register("firstName", {
                validate: (value) => value !== "admin" || "Nice try!"
                })}
                helperText={formState.errors.firstName && formState.errors.firstName.message}
                error={!!formState.errors.firstName}
                fullWidth
                autoComplete="on"
            />
            <TextField
                name="lastName"
                label="Фамилия"
                {...register("lastName", {
                required: "Это обязательное поле!"
                })}
                helperText={formState.errors.lastName && formState.errors.lastName.message}
                error={!!formState.errors.lastName}
                fullWidth
                autoComplete="on"
            />
            </div>
            <div className="row">
            <TextField
                {...register("email", {
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                    message: "Это неверная почта!"
                }
                })}
                helperText={formState.errors.email && formState.errors.email.message}
                error={!!formState.errors.email}
                name="email"
                label="E-Mail"
                defaultValue=""
                fullWidth
                autoComplete="on"
            />
            <TextField
                {...register("password", {
                required: "Это обязательное поле!"
                })}
                helperText={formState.errors.password && formState.errors.password.message}
                error={!!formState.errors.password}
                name="password"
                type="password"
                label="Пароль"
                fullWidth
                autoComplete="on"
            />
            </div>
            <div className="row">
            <TextField 
                name="about" 
                label="Обо мне" 
                {...register("aboutMe")}
                fullWidth 
                autoComplete="on"
                />
            </div>
            <br />
            <div className="row">
            <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
                Зарегистрироваться
            </Button>
            <Button onClick={() => reset()} type="reset" variant="contained" color="secondary">
                Очистить
            </Button>
            </div>
        </form>
    </div>
    );
}
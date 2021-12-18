export const ProfileFunc = ({name, registredAt, options}) => {
    
    const dataRegistration = registredAt.toLocaleDateString('ru-RU', options);

    return (
        <div style={
                    {margin: '0 auto',
                    marginTop: '50px',
                    padding: '10px',
                    border: '5px solid rgb(231 229 229)',
                    borderRadius: '10px',
                    width: '300px',
                    textAlign: 'left'
                    }
        }>
            Привет, <span style={{fontWeight: 'bold'}}>{name.split(" ")[0]}</span>!
            <br/>
            Дата регистрации: {dataRegistration.substring(0, dataRegistration.lastIndexOf(" "))}
        </div>
    )
};
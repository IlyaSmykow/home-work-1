export const ProfileFunc = ({name, registredAt, monthNames}) => {

    const month = monthNames[registredAt.getMonth()];
    const year = registredAt.getFullYear();
    const day = registredAt.getDate();

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
            Привет, <span style={{fontWeight: 'bold'}}>{name}</span>!
            <br/>
            Дата регистрации: {day} {month} {year}
        </div>
    )
};
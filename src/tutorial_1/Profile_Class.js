import React from 'react';


export class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options,
            dataRegistration: this.props.registredAt.toLocaleDateString('ru-RU', this.props.options)
        };
    }

    render() {
        return <div style={
                    {margin: '0 auto',
                    marginTop: '50px',
                    padding: '10px',
                    border: '5px solid rgb(231 229 229)',
                    textAlign: 'left',
                    borderRadius: '5px',
                    width: '300px',
                    }
        }>
            Привет, <span style={{fontWeight: 'bold'}}>{this.props.name.split(" ")[0]}</span>!
            <br/>
            Дата регистрации: {this.state.dataRegistration.substring(0, this.state.dataRegistration.lastIndexOf(" "))}
        </div>
    }
}
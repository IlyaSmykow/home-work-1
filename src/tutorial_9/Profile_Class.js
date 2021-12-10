import React from 'react';


export class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            month: this.props.monthNames[this.props.registredAt.getMonth()],
            year: this.props.registredAt.getFullYear(),
            day: this.props.registredAt.getDate()
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
            Привет, <span style={{fontWeight: 'bold'}}>{this.props.name}</span>!
            <br/>
            Дата регистрации: {this.state.day} {this.state.month} {this.state.year}
        </div>
    }
}
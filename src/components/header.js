import React from 'react';
class Header extends React.Component {
    constructor(props) {
    super(props)
    console.log('header props', this.props)
    }
    render(){
        return(
            <div style={{backgroundColor: this.props.color}}>
                {this.props.name}
                {this.props.age}

            </div>
        )
    }
}


export default Header;
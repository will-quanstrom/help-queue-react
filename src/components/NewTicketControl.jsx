import React from 'react';

class NewTicketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }
    
    render(){
        return(
            <div>
                <p>This is the NewTicketControl componenet!</p>
            </div>
        );
    }
}

export default NewTicketControl;
import React from 'react';

class InfoBody extends React.Component{
    render() {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
    };

export default InfoBody;

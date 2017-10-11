import React from 'react';

class Intellectual extends React.Component{
    render() {
        return (
            //your content goes here
            <table width="100%">
                <tr>
                    <td><img src="images/bcit_logo2.png" width="400px" height="400px"></img></td>
                    <td><img src="images/bookstore.jpg" width="200px" height="200px"></img>
                        <figcaption><h1>BookStore</h1></figcaption></td>
                </tr>
                <tr>
                    <td><img src="images/bookstore2.jpg" width="500px" height="500px"></img></td>
                    <td>
                        <div>
                            <h6>For Burnaby BookStore:</h6>
                            <ul>
                                <li><b>Location:</b></li>
                                <li>Building SE2 (north side, ground level)</li>
                                <li><b>Operation Hours:</b></li>
                                <li><i>Monday-Friday:</i>  9:00am - 4:00pm</li>
                                <li><i>Saturday-Sunday:</i>  CLOSED</li>
                                <li><b>Contact:</b></li>
                                <li>Phone: 604-432-8379</li>
                                <li>Email: bookstore@bcit.ca</li>

                            </ul>
                        </div>
                        <hr/>
                        <div>
                            <h6>For Downtown BookStore:</h6>
                            <ul>
                                <li><b>Location:</b></li>
                                <li>2nd floor</li>
                                <li><b>Operation Hours:</b></li>
                                <li><i>Monday-Friday:</i>  8:30am - 4:30pm</li>
                                <li><i>Saturday-Sunday:</i>  CLOSED</li>
                                <li><b>Contact:</b></li>
                                <li>Phone: 604-412-7799</li>
                                <li>Email: bookstore@bcit.ca</li>

                            </ul>
                        </div>
                    </td>
                </tr>
            </table>
        )
    }
};

export default Intellectual;

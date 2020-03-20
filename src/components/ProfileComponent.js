import React, { Component } from 'react';

//Profile page
class Profile extends Component {

    render() {
        return (
            <div className="container">
                <div className="row m-4">
                    <div className="col-12 text-center">
                        <h2>Profile</h2>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-12 col-sm-3 offset-sm-2 col-md-2 offset-md-3">
                        <img src={this.props.profile.avatarImage} className="img-fluid" alt="Avatar" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-5 ml-2" >
                        <table>
                            <tbody>
                                <tr>
                                    <td className="cellleft">
                                        <b>first name</b>
                                    </td>
                                    <td className="cellright">
                                        {this.props.profile.firstName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cellleft">
                                        <b>last name</b>
                                    </td>
                                    <td className="cellright">
                                        {this.props.profile.lastName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cellleft">
                                        <b>phone</b>
                                    </td>
                                    <td className="cellright">
                                        {this.props.profile.phone}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cellleft">
                                        <b>email</b>
                                    </td>
                                    <td className="cellright">
                                        {this.props.profile.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cellleft">
                                        <b>bio</b>
                                    </td>
                                    <td className="cellright">
                                        {this.props.profile.bio}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
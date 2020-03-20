import React, { Component } from 'react';


//Detail Page
class Detail extends Component {

    render() {
        return (
            <div className="container">
                <div className="row m-4">
                    <div className="col-12 text-center">
                        <h2>{this.props.feature.properties.title}</h2>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3" >
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Place</b>
                                    </td>
                                    <td>
                                        {this.props.feature.properties.place}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Magnitude</b>
                                    </td>
                                    <td>
                                        {this.props.feature.properties.mag}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Time</b>
                                    </td>
                                    <td>
                                        {this.props.timeTrans(this.props.feature.properties.time)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Status</b>
                                    </td>
                                    <td>
                                        {this.props.feature.properties.status}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Tsunami</b>
                                    </td>
                                    <td>
                                        {this.props.feature.properties.tsunami}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Type</b>
                                    </td>
                                    <td>
                                        {this.props.feature.properties.type}
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

export default Detail;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Home page
class Home extends Component {

    render() {
        const tableBody = this.props.data.features.map((feature) => {
            return (
                <tr>
                    <td className="text-left">
                        <Link to={`/detail/${feature.id}`}><u>{feature.properties.place}</u></Link>
                    </td>
                    <td>{feature.properties.mag}</td>
                    <td>{this.props.timeTrans(feature.properties.time)}</td>
                </tr>
            );
        });
        

        return (
            <div className="container">
                <div className="row m-4">
                    <div className="col-12 text-center">
                        <h2>{this.props.data.metadata.title}</h2>
                    </div>
                </div>
                <div className="row m-2 text-center">
                    <div className="col-12 col-sm-9 offset-md-2 offset-lg-3">
                        <table>
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Magnitude</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                            {tableBody}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
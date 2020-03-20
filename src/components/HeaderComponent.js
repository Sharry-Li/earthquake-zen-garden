import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import { data } from '../data';


class Header extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-2 text-left">
                                <Link to="/home">
                                    <img src={data.site.logoImage} height="50" width='50' alt="Realtor" />
                                </Link>
                            </div>
                            <div className="col-8 text-center">
                                <h3>{data.site.title}</h3>
                            </div>
                            <div className="col-2 text-right">
                                <Link to="/profile"><u>Welcome {data.profile.firstName}</u></Link>                                
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;
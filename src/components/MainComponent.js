import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Detail from './DetailComponent';
import Profile from './ProfileComponent';
import { data } from '../data';

//Main page
class Main extends Component {

    timeTrans(time){
        var date = new Date(time);
        var year = date.getFullYear();
        var month = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
        var day = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
        var minute = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes());
        var second = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
        return year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '-7:00';
    }

    render() {
        const FeatureDetail = ({match}) => {
            return (
                <Detail feature={data.data.features.filter((feature) => feature.id === match.params.featureId)[0]} 
                        timeTrans={this.timeTrans}/>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={() => <Home data={data.data} timeTrans={this.timeTrans}/>} />
                    <Route path='/detail/:featureId' component={FeatureDetail} />
                    <Route path='/profile' component={() => <Profile profile={data.profile} />} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;
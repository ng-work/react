// import { Menu, Icon, Button } from 'antd';
import * as React from 'react';
import Header from './../../components/menu/header';
import Home from "../home/home";
import MainMenu from "../home/menu";
import Config from "../config/config";
import {Route,Switch} from 'react-router-dom';

export default class Body extends React.Component<{},{}>{
    constructor(props:any){
        super(props);
    }
    componentDidMount() {

    }
    render () {
        return (
            <div>
                <Header prop={this.props} />
                <div>
                    <MainMenu prop={this.props}/>
                    <div style={{float:'left'}}>
                        <Switch>
                            <Route path="/body" exact component={Home}></Route>
                            <Route path="/body/home"  component={Home}></Route>
                            <Route path="/body/config"  component={Config}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
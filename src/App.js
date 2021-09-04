import React from "react"
import { Route, Redirect, Switch } from 'react-router-dom'

// YE
import {HomePage} from 'home/index'
import {RecommandPage} from 'recommand/index'
import {ReservationPage} from 'reservation/index'
import {ChoicePage} from 'choice/index'
import {Header} from 'common/index'

//JH
import {AdminPage} from 'admin/index';
import {DashBoard} from 'analysis/index';
import {UserList} from 'user/index';
import {SalesManagement} from 'sales/index';

//YJ
import {Join} from 'join/index';
import {MyPageP} from 'myPage/index';

//MJ
import { Login, CheckId } from "login/index";
import { ChatBot } from "chat/index";





const App = () => ( <>
    <Header/>
    <Switch>
    <Route exact path='/' component= { HomePage }/>
    <Redirect from='/home-page' to= { '/' }/>
    <Route exact path='/home-page' component= { HomePage }/>
    <Route exact path='/recommand-page' component= { RecommandPage }/>
    <Route exact path='/reservation-page' component= { ReservationPage }/>
    <Route exact path='/choice-page' component= { ChoicePage }/>

    <Route exact path = '/admin-page' component = {AdminPage}/>
    <Route exact path = '/dash-board' component = {DashBoard}/>
    <Route exact path = '/user-list' component = {UserList}/>
    <Route exact path = '/sales-management' component = {SalesManagement}/>


    <Route exact path = '/join' component = {Join}/>
    <Route exact path = '/my-page' component = {MyPageP}/>

    <Route exact path = '/login' component = {Login}/>
    <Route exact path = '/login/find' component = {CheckId}/>
    <Route exact path = '/chat-bot' component = {ChatBot}/>

    </Switch>
  </>)


export default App;
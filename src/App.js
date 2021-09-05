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
import { Login, CheckId, CheckPw, TakeId, ChangPw } from "login/index";
import {  ChatBot, VideoTalk,Sub } from "chat/index";





const App = () => ( <>
    <div>
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
        <Redirect from = '/login/find/check-id' to = {'/login/find'}/>
        <Route exact path ='/login/find/check/take-id' component = {TakeId}/>
        <Route exact path ='/login/find/check-pw' component = {CheckPw}/>
        <Route exact path ='/login/find/check/change-pw' component = {ChangPw}/>
      </Switch>
    </div>
    <from>
      <Switch>
        <Route exact path ='/chat' component = {ChatBot}/>
        <Redirect from = '/chat/talk' to = {'/chat'}/>
        <Route exact path ='/chat/Video' component = {VideoTalk}/>
        <Route exact path = '/chat/Video/sub' component = {Sub}/>
      </Switch>
    </from>
  </>)


export default App;
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HeaderLogo } from 'login'
// import { Link, Switch, Route, Redirect } from 'react-router-dom'
// import {CheckId,CheckPw, ChangPw, HeaderLogo,TakeId} from 'login/index'

const Find = () => {

    return(
        <>
        <Div1>
            <HeaderLogo/>
            <div>
            <Button><Link to='/login/find/check-id' style= {{textDecoration: 'none'}}>ID</Link></Button>
            <Button><Link to='/login/find/check-pw' style= {{textDecoration: 'none'}}>FW</Link></Button>
            </div>
            {/* <div>
                <Switch>
                    <Route exact path ='/login/find' component = {CheckId}/>
                    <Redirect from = '/login/find/check-id' to = {'/login/find'}>
                        <Switch>
                            <Route exact path ='/login/find/check/take-id' component = {TakeId}/>
                        </Switch>
                    </Redirect>
                    <Route exact path ='/login/find/check-pw' component = {CheckPw}>
                        <Switch>
                        <Route exact path ='/login/find/check/change-pw' component = {ChangPw}/>
                        </Switch>
                    </Route>
                </Switch>
            </div> */}
        </Div1>
        </>
    )
}
export default Find
// const Li = styled.li`
//     // display:inline;
//     list-style-type:none;
// `
const Button = styled.button`
    width:70px;
    background-color: #ffef89;
    border: none;
    border-radius:5px;
    color:#fff;
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
    float: left;
`

const Div1 = styled.div`
    width:50%;
    height:115px;
    // display: flex;
    border: 1px solid #ffcc00;
    background-color: #ffcc00;
    // text-align: center;
`

import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router';
import {Nacigation, VideoTalk, Talk, Sub} from 'chat/index'

const ChatBot = () => {
    return (<>
    <div>
        <ChDiv>
            <Nacigation/>
            <tr>
                {/* <Nacigation/> */}
                <Switch>
                    <Route exact path ='/chat' component = {Talk}/>
                    <Redirect from = '/chat/talk' to = {'/chat'}/>
                    <Route exact path ='/chat/Video' component = {VideoTalk}/>
                    <Route exact path = '/chat/Video/sub' component = {Sub}/>
                </Switch>
            </tr>
        </ChDiv>
    </div>
    </>)
}

export default ChatBot

const ChDiv = styled.table`
    width : 430px;
    height : 600px;
    // padding:10px
    border-radius:10px;
    border-width : 5px;
    border-style : dotted;
    border-color : #ffcc00;
`
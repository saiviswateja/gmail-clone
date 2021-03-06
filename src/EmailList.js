import { Checkbox,IconButton } from '@material-ui/core';
import  ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo'; 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import './EmailList.css';
import Section from './Section';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected="true"></Section>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"></Section>
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"></Section>
            </div>
            <div className="emailList__list">
                <EmailRow title="Twitch" subject="Hey fellow Streamer!!!" description="This is the best" time="10pm"></EmailRow>
            </div>
        </div>
    )
}

export default EmailList

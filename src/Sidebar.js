import React from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

function Sidebar(){
    return (
        <div className="sidebar">


            {/* {Twitter icon} */}

            <TwitterIcon className="sidebar__twitterIcon"/>

            {/* {SidebarOption} */}

            <SidebarOption active Icon={HomeIcon} text = "Home"/>
            <SidebarOption Icon={SearchIcon} text = "Explore"/>
            <SidebarOption Icon={NotificationsIcon} text = "Notifications"/>
            <SidebarOption Icon={MailIcon} text = "Messages"/>
            <SidebarOption Icon={BookmarkIcon} text = "Bookmarks"/>
            <SidebarOption Icon={ListIcon} text = "Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text = "Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text = "More"/>
            

            {/* { Button ->tweet} */}

            <Button variant="outlined" className="sidebar__tweet" fullWidth>tweet</Button>


        </div>

    );
}

export default Sidebar;
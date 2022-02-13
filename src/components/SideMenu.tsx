import React from 'react';
import { Typography, IconButton, Button } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PersonOutline';

import { useHomeStyles } from '../pages/Home';

interface SideMenuProps {
    styles: ReturnType<typeof useHomeStyles>
}

const SideMenu: React.FC<SideMenuProps> = ({ styles }: SideMenuProps): React.ReactElement => {
    return (
        <ul className={styles.sideMenuList}>
            <li className={styles.sideMenuListItem}>
                <IconButton className={styles.twitterLogoWrapper} aria-label='' color='primary'>
                    <TwitterIcon className={styles.twitterLogo} color='primary' />
                </IconButton>
            </li>
            <li className={styles.sideMenuListItem} >
                <div>
                    <SearchIcon className={styles.sideMenuListItemIcon} />
                    <Typography className={styles.sideMenuListItemLabel} variant='h6'>Search</Typography>
                </div>
            </li>
            <li className={styles.sideMenuListItem} >
                <div>
                    <NotificationsIcon className={styles.sideMenuListItemIcon} />
                    <Typography className={styles.sideMenuListItemLabel} variant='h6'>Notifications</Typography>
                </div>
            </li>
            <li className={styles.sideMenuListItem} >
                <div>
                    <MessageIcon className={styles.sideMenuListItemIcon} />
                    <Typography className={styles.sideMenuListItemLabel} variant='h6'>Messages</Typography>
                </div>
            </li>
            <li className={styles.sideMenuListItem} >
                <div>
                    <BookmarkIcon className={styles.sideMenuListItemIcon} />
                    <Typography className={styles.sideMenuListItemLabel} variant='h6'>Bookmark</Typography>
                </div>
            </li>
            <li className={styles.sideMenuListItem}>
                <div>
                    <ListIcon className={styles.sideMenuListItemIcon} />
                    <Typography className={styles.sideMenuListItemLabel} variant='h6'>List</Typography>
                </div>
            </li>
            <li className={styles.sideMenuListItem}>
                <div>
                    <UserIcon className={styles.sideMenuListItemIcon} />
                    <Typography className={styles.sideMenuListItemLabel} variant='h6'>Profile</Typography>
                </div>
            </li>
            <li className={styles.sideMenuListItem}>
               <Button className={styles.sideMenuTweetButton} variant='contained' color='primary' fullWidth>
                   Tweet
                </Button>
            </li>
        </ul>
    )
}

export default SideMenu;

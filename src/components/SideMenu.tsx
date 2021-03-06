import React, { useState } from 'react';

import ModalBlock from './ModalBlock';

import { Typography, IconButton, Button, Hidden } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PersonOutline';
import CreateIcon from '@material-ui/icons/Create';

import { useHomeStyles } from '../pages/Home/theme';
import AddTweetForm from './AddTweetForm';
interface SideMenuProps {
    styles: ReturnType<typeof useHomeStyles>
}

const SideMenu: React.FC<SideMenuProps> = ({ styles }: SideMenuProps): React.ReactElement => {
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

    const handleCloseAddTweetModal = (): void => {
        setIsVisibleModal(false)
    };

    const handleOpenAddTweetModal = (): void => {
        setIsVisibleModal(true)
    };

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
                    <Hidden smDown>
                        <Typography className={styles.sideMenuListItemLabel} variant='h6'>Search</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={styles.sideMenuListItem} >
                <div>
                    <NotificationsIcon className={styles.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={styles.sideMenuListItemLabel} variant='h6'>Notifications</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={styles.sideMenuListItem} >
                <div>
                    <MessageIcon className={styles.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={styles.sideMenuListItemLabel} variant='h6'>Messages</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={styles.sideMenuListItem} >
                <div>
                    <BookmarkIcon className={styles.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={styles.sideMenuListItemLabel} variant='h6'>Bookmark</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={styles.sideMenuListItem}>
                <div>
                    <ListIcon className={styles.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={styles.sideMenuListItemLabel} variant='h6'>List</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={styles.sideMenuListItem}>
                <div>
                    <UserIcon className={styles.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={styles.sideMenuListItemLabel} variant='h6'>Profile</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={styles.sideMenuListItem}>
                <Button
                    className={styles.sideMenuTweetButton}
                    variant='contained'
                    color='primary'
                    fullWidth
                    onClick={handleOpenAddTweetModal}
                >
                    <Hidden smDown>Tweet</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
                <ModalBlock
                    title='First tweet!'
                    visible={isVisibleModal}
                    onClose={handleCloseAddTweetModal}
                >
                    <div style={{ width: 550 }}>
                        <AddTweetForm maxRows={15} styles={styles} />
                    </div>
                </ModalBlock>
            </li>
        </ul>
    )
}

export default SideMenu;

import React from 'react';
import classNames from 'classnames';
import { Container, Grid, makeStyles, Paper, Typography, withStyles, createStyles, InputBase, Theme, TextField, IconButton, InputAdornment } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

import Tweet from '../components/Tweet';
import SideMenu from '../components/SideMenu';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import { ListItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';


export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh'
  },
  sideMenuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main
        },
        '& svg path': {
          fill: theme.palette.primary.main
        }
      }
    },
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out',
    }
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  twitterLogoWrapper: {
    margin: '10px 0'
  },
  twitterLogo: {
    fontSize: 36,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',

    '& h6': {
      fontWeight: 800
    }
  },
  tweet: {
    display: 'flex',
    paddingTop: 15,
    paddingLeft: 20,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)'
    }
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    maxWidth: 450,
  },
  tweetUserName: {
    color: grey[500]
  },
  tweetButtons: {
    fontSize: 20
  },
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  }
}))

const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
        '& svg path': {
          fill: theme.palette.primary.main
        },
      },
      '&:hover': {
        '& fieldset': {
          borderColor: 'transparent'
        }
      },
      '& fieldset': {
        borderWidth: 1,
        borderColor: 'transparent'
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px'
    }
  }
}))(TextField);

export const Home = (): React.ReactElement => {
  const styles = useHomeStyles();
  return (
    <Container className={styles.wrapper} maxWidth='lg' >
      <Grid container spacing={3}>
        <Grid sm={1} item md={3}>
          <SideMenu styles={styles} />
        </Grid>
        <Grid sm={8} item md={6}>
          <Paper className={styles.tweetsWrapper} variant='outlined'>
            <Paper className={styles.tweetsHeader} variant='outlined'>
              <Typography variant='h6'>Main</Typography>
            </Paper>
            <Paper>
              <div className={styles.addForm}>
                <div className={styles.addFormBody}>
                  <Avatar
                    className={styles.tweetAvatar}
                    alt={`User Avatar`}
                    src='/static/images/avatar/1.jpg'
                  />
                  <TextareaAutosize
                    className={styles.addFormTextarea}
                    placeholder='Type...'
                  />
                </div>
                <div className={styles.addFormBottom}>
                  <div className={classNames(styles.tweetFooter, styles.addFormBottomActions)}>
                    <IconButton color='primary'>
                      <ImageOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton color='primary'>
                      <EmojiIcon style={{ fontSize: 26 }} />
                    </IconButton>
                  </div>
                  <div className={styles.addFormBottomRight}>
                    <span>280</span>
                    <div className={styles.addFormCircleProgress}>
                      <CircularProgress
                        style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                        variant='static'
                        size={20}
                        thickness={4}
                        value={100}
                      />
                      <CircularProgress
                        style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                        variant='static'
                        size={20}
                        thickness={4}
                        value={100}
                      />
                    </div>
                    <Button color='primary' variant='contained'>
                      Tweet
                    </Button>
                  </div>
                </div>
              </div>
              <div className={styles.addFormBottomLine} />
            </Paper>
            {[
              ...new Array(8).fill(
                <Tweet
                  styles={styles}
                  user={{
                    fullname: 'Joze Aldo',
                    username: 'joze_aldo',
                    avatarUrl: '/static/images/avatar/1.jpg'
                  }}
                  text='Hello everyone, it is my first tweet'
                />
              )
            ]}
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={styles.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={styles.rightSideBlock}>
              <Paper className={styles.rightSideBlockHeader} variant="outlined">
                <b>Hot topics</b>
              </Paper>
              <List>
                <ListItem className={styles.rightSideBlockItem}>
                  <ListItemText
                    primary="Saint Petersburg"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Tweets: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={styles.rightSideBlockItem}>
                  <ListItemText
                    primary="#coronavirus"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Tweets: 163 122
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={styles.rightSideBlockItem}>
                  <ListItemText
                    primary="Belarus"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 13 554
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={styles.rightSideBlock}>
              <Paper className={styles.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={styles.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

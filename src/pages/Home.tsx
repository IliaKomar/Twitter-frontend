import React from 'react';
import { Container, Grid, makeStyles, Paper, Typography, withStyles, createStyles, InputBase, Theme } from '@material-ui/core';

import Tweet from '../components/Tweet';
import SideMenu from '../components/SideMenu';

import grey from '@material-ui/core/colors/grey';

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh'
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230,
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
    borderBottom: 0
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
    paddingTop: 15,
    paddingLeft: 20,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)'
    }
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    width: 450
  },
  tweetUserName: {
    color: grey[500]
  },
  tweetButtons: {
    fontSize: 20
  }
}))

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      height: 45,
      paddingLeft: 10,
    },
  }),
)(InputBase);


export const Home = () => {
  const styles = useHomeStyles();
  return (
    <Container className={styles.wrapper} maxWidth='lg' >
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu styles={styles} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.tweetsWrapper} variant='outlined'>
            <Paper className={styles.tweetsHeader} variant='outlined'>
              <Typography variant='h6'>Main</Typography>
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
        <Grid item xs={3}>
          <SearchTextField
            placeholder='Search in Twitter'
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  );
};

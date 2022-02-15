import React, { useEffect, useCallback } from 'react';

import { Container, Grid, Paper, Typography, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { ListItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Tweet from '../../components/Tweet';
import SideMenu from '../../components/SideMenu';
import AddTweetForm from '../../components/AddTweetForm';
import { SearchTextField } from '../../components/SearchTextField';

import { useHomeStyles } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { getTweets } from '../../store/ducks/tweets/actionCreators';
import { selectTweetsItems, selectIsTweetsLoading } from '../../store/ducks/tweets/selectors';

export const Home = (): React.ReactElement => {
  const styles = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  useEffect(() => {
    dispatch(getTweets())
  }, [dispatch]);

  return (
    <Container className={styles.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} item md={3}>
          <SideMenu styles={styles} />
        </Grid>
        <Grid sm={8} item md={6}>
          <Paper className={styles.tweetsWrapper} variant="outlined">
            <Paper className={styles.tweetsHeader} variant="outlined">
              <Typography variant="h6">Main</Typography>
            </Paper>
            <Paper>
              <AddTweetForm styles={styles} />
              <div className={styles.addFormBottomLine} />
            </Paper>
            {isLoading ? (
              <div className={styles.preloader}>
                <CircularProgress />
              </div>
            ) : (
              tweets.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  styles={styles}
                  user={tweet.user}
                  text={tweet.text}
                />
              ))
            )}
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
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
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
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
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
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        Tweets: 13 554
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={styles.rightSideBlock}>
              <Paper className={styles.rightSideBlockHeader} variant="outlined">
                <b>Read about</b>
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
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
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

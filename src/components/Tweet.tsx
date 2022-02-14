import React from 'react';
import classNames from 'classnames';
import { Paper, Avatar, Typography, IconButton } from '@material-ui/core';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { useHomeStyles } from '../pages/Home';

interface TweetProps {
    styles: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    },
    text: string
}

const Tweet: React.FC<TweetProps> = ({ styles, text, user }: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(styles.tweet, styles.tweetsHeader)} variant='outlined'>
            <Avatar
                alt={`Users avatar - ${user.fullname}`}
                src={user.avatarUrl}
                className={styles.tweetAvatar}
            />
            <div>
                <Typography>
                    <b>{user.fullname}</b>
                    <span className={styles.tweetUserName}>@{user.username}</span>&nbsp;
                    <span className={styles.tweetUserName}>-</span>&nbsp;
                    <span className={styles.tweetUserName}>1 h</span>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {text}
                </Typography>
                <div className={styles.tweetFooter}>
                    <div>
                        <IconButton>
                            <CommentIcon className={styles.tweetButtons} />
                        </IconButton>
                        <span>1</span>
                    </div>
                    <div>
                        <IconButton>
                            <RepostIcon className={styles.tweetButtons} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <LikeIcon className={styles.tweetButtons} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <ShareIcon className={styles.tweetButtons} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default Tweet;
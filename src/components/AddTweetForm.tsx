import React, { useState } from 'react';
import classNames from 'classnames';

import { IconButton, Button } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import Avatar from '@material-ui/core/Avatar/Avatar';

import { useHomeStyles } from '../pages/Home/theme';

interface AddTweetFormProps {
    styles: ReturnType<typeof useHomeStyles>,
    maxRows?: number
}

const AddTweetForm: React.FC<AddTweetFormProps> = ({ styles, maxRows }: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = useState<string>('');

    const textLimitPercent = (text.length / 280) * 100;

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        };
    };

    const handleClickAddTweet = (): void => {
        if (text) {
            setText('');
        };
    };

    return (
        <div className={styles.addForm}>
            <div className={styles.addFormBody}>
                <Avatar
                    className={styles.tweetAvatar}
                    alt={`User Avatar`}
                    src='/static/images/avatar/1.jpg'
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    value={text}
                    maxLength={280}
                    className={styles.addFormTextarea}
                    placeholder='Type...'
                    maxRows={maxRows}
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
                    {text &&
                        <>
                            <span>{text.length}</span>
                            <div className={styles.addFormCircleProgress}>
                                <CircularProgress
                                    variant='determinate'
                                    size={20}
                                    thickness={4}
                                    value={textLimitPercent}
                                />
                                <CircularProgress
                                    style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                    variant='determinate'
                                    size={20}
                                    thickness={4}
                                    value={100}
                                />
                            </div>
                        </>
                    }
                    <Button
                        onClick={handleClickAddTweet}
                        color='primary'
                        variant='contained'
                    >
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddTweetForm
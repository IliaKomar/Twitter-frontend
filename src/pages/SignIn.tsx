import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MessagIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import Button from "@material-ui/core/Button";
import ModalBlock from "../components/ModalBlock";

import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        height: "100vh",
    },
    blueSide: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#71C9F8",
        flex: "0 0 50%",
        overflow: "hidden",
    },
    blueSideBackgroundIcon: {
        position: "absolute",
        left: "30%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "310%",
        height: "310%",
    },
    blueSideListInfo: {
        position: "relative",
        listStyle: "none",
        padding: 0,
        margin: 0,
        width: 380,
        "& h6": {
            display: "flex",
            alignItems: "start",
            color: "white",
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 50%",
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 15,
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
}));

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();
    const [visibleModal, setVisibleModal] = useState<"signIn" | "signUp">();
    const handleClickOpenSignIn = (): void => {
        setVisibleModal("signIn");
    };
    const handleClickOpenSignUp = (): void => {
        setVisibleModal("signUp");
    };
    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon
                    color="primary"
                    className={classes.blueSideBackgroundIcon}
                />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcon} />
                            Read about what interests you.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
                            Find out what the world is talking about.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessagIcon className={classes.blueSideListInfoIcon} />
                            Join the message.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon
                        color="primary"
                        className={classes.loginSideTwitterIcon}
                    />
                    <Typography variant="h4" className={classes.loginSideTitle}>
                        Find out what is happening in the world right now
                    </Typography>
                    <Typography>
                        <b>Join Twitter right now!</b>
                    </Typography>
                    <br />
                    <Button
                        onClick={handleClickOpenSignUp}
                        style={{ marginBottom: 15 }}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Register
                    </Button>
                    <Button
                        onClick={handleClickOpenSignIn}
                        variant="outlined"
                        color="primary"
                        fullWidth
                    >
                        Login
                    </Button>
                    <ModalBlock
                        visible={visibleModal === "signUp"}
                        onClose={handleCloseModal}
                        title="Create an account"
                    >
                        <FormControl
                            className={classes.loginFormControl}
                            component="fieldset"
                            fullWidth
                        >
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="name"
                                    label="Name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="name"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="password"
                                    label="Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button variant="contained" color="primary" fullWidth>
                                    Create
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock
                        visible={visibleModal === "signIn"}
                        onClose={handleCloseModal}
                        title="Log into account"
                    >
                        <FormControl
                            className={classes.loginFormControl}
                            component="fieldset"
                            fullWidth
                        >
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="password"
                                    label="Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button variant="contained" color="primary" fullWidth>
                                    Login
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
};

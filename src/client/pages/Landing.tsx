import React from "react";
import { createUseStyles } from "react-jss";
import Card from "../components/Card";
import Header from "../sections/Header";

const useStyles = createUseStyles(theme => ({
    '@global': {
        body: {
            padding: '1em',
            color: theme.colors.contrast,
            fontFamily: 'monospace',
            backgroundColor: theme.colors.background,
        },
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        maxWidth: '500px',
        '& > div': {
            marginBottom: '1em',
        }
    },
}));

export default () => {
    const {cards} = useStyles();
    return (
        <div>
            <Header />
            <div className={cards}>
                <Card>
                    <h2>Use a Theme</h2>
                    <p>Keep consistent styles throughout.</p>
                </Card>
                <Card>
                    <h2>Non-intefering CSS</h2>
                    <p>Each class has a unique ID</p>
                </Card>
                <Card>
                    <h2>Changeable Theme</h2>
                    <p>Toggle it if you want</p>
                </Card>
            </div>

        </div>
    );
}
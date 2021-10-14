import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(theme => ({
    header: {
        position: 'relative',
        width: '100%',
        left: 0,
        right: 0,
        top: 0,
        '& h1': {
            textAlign: 'center',
            fontSize: '5vw',
            fontWeight: 'lighter',
        },
    }
}));

const Header: React.FC<{}> = () => {
    const { header } = useStyles();
    return (
        <div className={header}>
            <h1>Style Demo</h1>
        </div>
    );
};

export default Header;
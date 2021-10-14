import React from "react";
import { createUseStyles } from "react-jss";

type CardProps = {
    children: React.ReactNode[]
}

const useStyles = createUseStyles(theme => ({
    container: {
        border: `1px solid ${theme.colors.secondary}`,
        padding: '1em',
        maxWidth: '500px',
        maxHeight: '275px',
        position: 'relative',
        '& p': {
            marginLeft: '1em',
        },
        '&:hover': {
            backgroundColor: `#222222`,
        },
    },
}));

const Card: React.FC<CardProps> = ({ children }) => {
    const { container } = useStyles();
    return (
        <div className={container}>
            { children }
        </div>
    );
};

export default Card;
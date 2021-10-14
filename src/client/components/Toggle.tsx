import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(theme => ({
    toggle: {
        position: 'fixed',
        top: '1em',
        right: '4em',
        '& label': {
            marginRight: '.5em',
        },
    },
}));

type ToggleProps = {
    checkedLabel: string;
    uncheckedLabel: string;
    onChange: () => void;
    isChecked: boolean;
};

const Toggle: React.FC<ToggleProps> = ({
    checkedLabel,
    uncheckedLabel,
    onChange,
    isChecked,
}) => {
    const { toggle } = useStyles();
    return (
        <div className={toggle}>
            <label>{ isChecked ? checkedLabel : uncheckedLabel }</label>
            <input type="checkbox" onChange={onChange} checked={isChecked}/>
        </div>
    );
};

export default Toggle;
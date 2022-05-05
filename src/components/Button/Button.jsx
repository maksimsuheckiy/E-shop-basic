import React from "react";
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({classes, handleClick, text}) => {
    return <button data-testid='btn' className={classes} onClick={handleClick}>{text}</button>
}

export default Button

Button.propTypes = {
    classes: PropTypes.string,
    handleClick: PropTypes.func,
    text: PropTypes.string
}

Button.defaultProps = {
    classes: 'default-Button',
}

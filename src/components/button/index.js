import React from 'react';

const buttonKeys = {
    info: 'is-info',
    dark: 'is-dark'
}

const Button = ({buttonText, clickHandler, variant, type}) => {
    if(type) {        
        return(
          <div>
              <a className={"button " + buttonKeys[variant]} type="submit" onClick={clickHandler}>{buttonText}</a>
          </div>
      )
    } else {
        return(
          <div>
              <a className={"button " + buttonKeys[variant]} onClick={clickHandler}>{buttonText}</a>
          </div>
      )
    }
}

Button.defaultProps = {
    buttonText: 'Primary',
    variant: 'dark'
};

export default Button;
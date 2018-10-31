import React from 'react';

const Header = ({headerText, classes}) => {
  let classList = classes ? classes.splice(' ').join(' ') : ' ';
  return(
    <div className="page-top-header">
      <div className="page-heading">
        <h1 className={"title is-1 " + classList}>
          {headerText}
        </h1>
      </div>
    </div>
  )
}

export default Header;
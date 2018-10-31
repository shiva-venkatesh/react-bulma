import React from 'react';

const Tag = ({tagName}) => {
  return(
    <span className="tag is-primary is-medium">
      {tagName}
    </span>
  )
}

export default Tag;
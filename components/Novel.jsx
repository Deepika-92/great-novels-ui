import React from 'react'

export default ({ id, title, author }) => (
  <div key={id} className="novelTitles">{`${title} by ${author}`}</div>
)

import React from 'react'

const Notification = ({ errors }) => {
  return (
    <div className={`${errors ? 'notification-errors' : 'notification-success'} box-notification`}>
      Soy un mensjae
    </div>
  )
}

export default Notification

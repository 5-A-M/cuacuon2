import React from 'react'
import ContactPhonenumber from './ContactPhonenumber'
import ContactWithMessenger from './ContactWithMessenger'

const WrapperContact = (props) => {
  return (
    <div style={{position: "fixed", bottom: 0, left: 0, zIndex: 30}}>
        <ContactPhonenumber />
        <ContactWithMessenger />
    </div>
  )
}

export default WrapperContact
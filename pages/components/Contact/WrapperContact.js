import React from 'react'
import ContactPhonenumber from './ContactPhonenumber'
import ContactWithMessenger from './ContactWithMessenger'
import ContactZalo from './ContactZalo'

const WrapperContact = (props) => {
  return (
    <div className='sdkhsakjssasa' style={{position: "fixed", bottom: 0, left: 0, zIndex: 9999, display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column", gap: 10, padding: "24px 0"}}>
        <ContactPhonenumber />
        <ContactWithMessenger />
        <ContactZalo />
    </div>
  )
}

export default WrapperContact
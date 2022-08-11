import React from 'react'
import BreakLine from '../BreakLine'
import DetailRight from './DetailRight'
import ImageLeft from './ImageLeft'
import Title from './Title'

const Wrapper = (props) => {
  return (
    <div className="kjdldjadklajwa" style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <div className="dsjklajklsakslasas" style={{width: "100%", maxWidth: 1280, display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column"}}>
            <Title {...props[0]} />
            <BreakLine />
            <div className="DSaJklsajslksasa" style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ImageLeft {...props[0]} />
                <DetailRight {...props[0]} />
            </div>
        </div>
    </div>
  )
}

export default Wrapper


import * as rdd from 'react-device-detect'


export default function Device({children}, props) {
  return <div className="device-layout-component" style={{width: "100%"}}>{children}</div>
}
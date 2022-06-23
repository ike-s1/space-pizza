import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader  className="pizza-block"
    speed={2}
    width={280}
    height={550}
    viewBox="0 0 280 550"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-510" y="68" rx="3" ry="3" width="88" height="6" /> 
    <rect x="-366" y="42" rx="3" ry="3" width="52" height="6" /> 
    <rect x="-439" y="69" rx="3" ry="3" width="410" height="6" /> 
    <rect x="-578" y="136" rx="3" ry="3" width="380" height="6" /> 
    <rect x="-506" y="176" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="-285" cy="99" r="20" /> 
    <circle cx="-284" cy="182" r="78" /> 
    <circle cx="-156" cy="165" r="119" /> 
    <circle cx="-434" cy="271" r="176" /> 
    <circle cx="-508" cy="286" r="64" /> 
    <circle cx="-519" cy="240" r="42" /> 
    <circle cx="-665" cy="280" r="45" /> 
    <circle cx="-500" cy="151" r="128" /> 
    <circle cx="128" cy="128" r="128" /> 
    <rect x="0" y="296" rx="10" ry="10" width="280" height="32" /> 
    <rect x="0" y="349" rx="0" ry="0" width="280" height="88" /> 
    <rect x="0" y="461" rx="10" ry="10" width="95" height="30" /> 
    <rect x="122" y="453" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;
import {NavLink} from "react-router";

const Lien = ({to, label}) => {
 
 const checkIsActive = ({isActive}) => isActive ? {color: "orange"}: {}
 
 return (
  <NavLink to={to} style={checkIsActive}>{label}</NavLink>
 )
}

export default Lien
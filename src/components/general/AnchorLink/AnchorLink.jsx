import { Link } from "react-scroll"

const AnchorLink = ({className, to, onClick, children}) => {
  return (
    <Link 
      className={className} 
      to={to}
      smooth={true}
      offset={-80}
      duration={500}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default AnchorLink
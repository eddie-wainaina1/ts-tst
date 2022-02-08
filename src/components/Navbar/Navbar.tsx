// import { Pharos, BAM, CAPO } from './Navdetails'
import { NavBarStyle,NavDetailsStyle,NavElementStyle,NavLinkStyle } from './Navbar.styles';

type NavbarProps = {
    isOpen?: boolean,
    linkList: {
        title: string,
        url: string,
        description: string
    }[]
};

export  const Navbar = (props: NavbarProps)=>{
    return (
        <nav id="nav-bar" style={NavBarStyle}>
            <ul id="nav-details" style={NavDetailsStyle}>
            {props.linkList.map(i=>(
            <li key={i.title} className="nav-element" style={NavElementStyle}>
                <a href={i.url} 
                target= "_blank"
                rel = "noreferrer"
            className="nav-link" 
            style={NavLinkStyle}>
                <h2>{i.title}</h2>
                <p>{i.description}</p></a>
            </li>
            ))}
            </ul>
        </nav>
    )
}
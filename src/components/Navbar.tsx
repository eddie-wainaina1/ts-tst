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
            {props.linkList.map(i=>(<a href={i.url} 
            className="nav-link" 
            style={NavLinkStyle}>
            <li key={i.title} className="nav-element" style={NavElementStyle}>
                <h2>{i.title}</h2>
                <p>{i.description}</p>
            </li>
            </a>))}
            </ul>
        </nav>
    )
}
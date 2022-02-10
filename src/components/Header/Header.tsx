import * as React from "react"
import { Link } from "react-router-dom"
import { HeaderStyles} from "./Header.styles"

const Header = ()=>{
    return(
        <header id="header" >
            <h1>Eddie's Training Environment</h1>
            <nav style={HeaderStyles}>
                Navigation
                <Link to="/test">Test</Link>
            </nav>
        </header>
    )
}
export { Header }
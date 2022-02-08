import React from "react"

const NavBarStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
}
const NavLinkStyle: React.CSSProperties = {
    color: "whitesmoke",
    textDecoration: "none",
    width: "100%",
    height: "auto"
}
const NavElementStyle: React.CSSProperties = {
    display: "block",
    borderRadius: "4vh",
    borderColor: "white",
    margin: "2px",
    backgroundImage: "linear-gradient(30deg,#8C8FF4,#3F42B2,#1F227A,#101258)",
    padding: "2vh",
}
const NavDetailsStyle: React.CSSProperties = {
    width: "auto",
    justifyContent: "center",
    flexDirection: "column"
}
export { NavBarStyle,NavDetailsStyle,NavElementStyle,NavLinkStyle }
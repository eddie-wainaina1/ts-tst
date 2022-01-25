import React from "react"

const NavBarStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
}
const NavLinkStyle: React.CSSProperties = {
    color: "whitesmoke",
    textDecoration: "none",
    display: "inline-block",
    width: "28%",
    height: "100%"
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
    width: "80%",
}
export { NavBarStyle,NavDetailsStyle,NavElementStyle,NavLinkStyle }
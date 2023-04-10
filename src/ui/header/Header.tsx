import "./header.css"

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <a href="/">Posts</a>
                <a href="/">About Me</a>
            </div>
            <div className="header-right">
                <a href="/">Login</a>
                <a href="/">Sign Up</a>
            </div>
        </header>
    )
}

export default Header

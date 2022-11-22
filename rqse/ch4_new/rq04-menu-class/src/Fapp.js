import './App.css';

function Fapp() {
    return (
        <main>
            <h1>Functional Menu</h1>
            <Menu></Menu>
        </main>
    );
}

function Menu() {
    return(
        <ul>
            <MenuItem label="Home" href="/" className="logo" />
            <MenuItem label="About" href="/about/" id="about-link" />
            <MenuItem label="Blog" href="/blog/" target="_blank" id="blog-link" />
        </ul>
    );
}

function MenuItem({href, label, ...rest}) {
    return(
        <li>
            <a
                href={href}
                title={label}
                {...rest} >
                    {label}
            </a>
        </li>
    );
}

export default Fapp;

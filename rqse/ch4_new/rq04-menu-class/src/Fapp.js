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
            <MenuItem label="Home" href="/" />
            <MenuItem label="About" href="/about/" />
            <MenuItem label="Blog" href="/blog/" target="_blank" />
        </ul>
    );
}

function MenuItem({href, label, target="_self"}) {
    return(
        <li>
            <a
                href={href}
                title={label}
                target={target} >
                    {label}
            </a>
        </li>
    );
}

export default Fapp;

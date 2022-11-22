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
            <MenuItem label="Blog" href="/blog/" />
        </ul>
    );
}

function MenuItem(props) {
    return(
        <li>
            <a
                href={props.href}
                title={props.label} >
                    {props.label}
            </a>
        </li>
    );
}

export default Fapp;

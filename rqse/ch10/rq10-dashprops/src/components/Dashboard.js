const BUTTON_STYLE = {
    display: 'inline-block',
    padding: '4px 10px',
    background: 'transparent',
    border: '0',
};
const HEADER_STYLE = {
    display: 'flex',
    justifyContent: 'flex-end',
    borderBottom: '1px solid',
};

function Button({ children }) {
    return(
        <button style={BUTTON_STYLE}>{children}</button>
    );
}

function UserButton({ name }) {
    return(
        <button>👤 {name}</button>
    );
}

function Header({ name }) {
    return(
        <header style={HEADER_STYLE}>
            <Button>Home</Button>
            <Button>Groups</Button>
            <Button>Profile</Button>
            <UserButton name={name}/>
        </header>
    );
}

function Welcome({ name }) {
    return(
        <section>
            <h1>Welcome, {name}!</h1>
        </section>
    );
}

function Main({ name }) {
    return(
        <main>
            <Welcome name={name}/>
        </main>
    );
}

function Dashboard({ name }) {
    return(
        <div>
            <Header name={name}/>
            <Main name={name}/>
        </div>
    );
}

export default Dashboard;
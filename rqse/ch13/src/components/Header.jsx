import Button from './Button';

function Header({title, action=null, icon=null}) {
  if(action) {
    return (
      <header className="card-header">
        <p className="card-title">
          <Button id={title} icon={icon} action={action} /> <label for={title}>{title}</label>
        </p>
      </header>
    );
  } else {
    return(
      <header className="card-header">
        <p className="card-title">{title}</p>
      </header>
    );
  }
}

export default Header;
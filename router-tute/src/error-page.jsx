import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <p>
                Sorry, something went awry!
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}


export default ErrorPage;
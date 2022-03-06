import { useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import {deleteInvoice, getInvoice} from "../data";

function Invoice() {
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return(
        <main style={{pading: "1rem"}}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>{invoice.name}: {invoice.number}</p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices" + location.search);
                    }}
                >
                    Pay Invoice
                </button>
            </p>
        </main>
    );
}

export default Invoice;
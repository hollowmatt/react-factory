import { useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import {deleteInvoice, getInvoice} from "../data";

function Invoice() {
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return(
        
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src="/img/invoice.svg" alt="ChitChat Logo" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">Invoice</div>
                <p className="text-slate-500">You have a new invoice!</p>
                <hr/>
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
            </div>
        </div>
    );
}

export default Invoice;
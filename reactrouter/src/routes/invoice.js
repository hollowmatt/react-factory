import { useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import {deleteInvoice, getInvoice} from "../data";

function Invoice() {
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/img/card-top.jpeg" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                    <img className="h-12 w-12 float-left" src="/img/invoice.svg" alt="ChitChat Logo" />
                    You have a new invoice!
                </div>
            </div>
            <div class="px-6 py-4 text-gray-700">
                <p>{invoice.name}: {invoice.number}</p>
                <p>Due Date: {invoice.due}</p>
                <br/>
                <p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            deleteInvoice(invoice.number);
                            navigate("/invoices" + location.search);
                        }}
                    >
                        Pay Invoice
                    </button>
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#invoice</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#money</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pay-up</span>
            </div>
        </div>     
    );
}

export default Invoice;
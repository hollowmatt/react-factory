import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root, {
  loader as rootLoader, 
  action as rootAction 
} from "./routes/root";
import ErrorPage from './error-page';
import Contact, {loader as contactLoader} from './routes/contact';
import {action as destroyAction} from './routes/destroy';
import EditContact, {
  action as EditAction,
} from './routes/edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact/>,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact/>,
        loader: contactLoader,
        action: EditAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

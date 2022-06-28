import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import  App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";




const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
     <ToastContainer/>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);

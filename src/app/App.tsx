import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainPage } from '../pages';
import './index.scss';
import { withStore } from './providers';

const App = () => (
  <>
    <MainPage />
    <ToastContainer />
  </>
);

export const AppWithStore = withStore(App);

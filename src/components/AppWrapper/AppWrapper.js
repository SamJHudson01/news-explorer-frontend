import { BrowserRouter } from 'react-router-dom';
import App from '../App/App';

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
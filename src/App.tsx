import { ContextProviders } from './context';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cube } from './components/pages/Cube';

const App = () => {

  return (
    <ContextProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cube />} />
        </Routes>
      </BrowserRouter>
    </ContextProviders>
  );
};

export default App;

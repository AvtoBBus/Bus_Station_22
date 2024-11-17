import { Route, Routes } from 'react-router-dom';
import { InfoPage } from './pages/InfoPage';
import { NavHeader } from './components/NavHeader';
import { HomePage } from './pages/HomePage';
import { TestPage } from './pages/TestPage';
import { UsingBooksPage } from './pages/UsingBooksPage';
import { ErrorPage } from './pages/ErrorPage';

import './App.css';

const App = () => {

  return <>
    <NavHeader />

    <div className="main-content">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/info-page" element={<InfoPage />}></Route>
        <Route path="/test-page" element={<TestPage />}></Route>
        <Route path="/using-books-page" element={<UsingBooksPage />}></Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  </>
}

export default App;

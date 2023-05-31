import './assets/style/App.css';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
        <div className="App">
            <Routes>
            {/* TODO- Page Routing Setup */}
                {/* home page route */}
                <Route path='/' element={<Home />} />
                {/* Add-product page route */}
                <Route path='/add-product' element={<AddProduct />} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;

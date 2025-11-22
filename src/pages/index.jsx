import Layout from "./Layout.jsx";

import Analyzer from "./Analyzer";

import Library from "./Library";

import Learn from "./Learn";

import Terms from "./Terms";

import SharedStoryView from "./SharedStoryView";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Analyzer: Analyzer,
    
    Library: Library,
    
    Learn: Learn,
    
    Terms: Terms,
    
    SharedStoryView: SharedStoryView,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Analyzer />} />
                
                
                <Route path="/Analyzer" element={<Analyzer />} />
                
                <Route path="/Library" element={<Library />} />
                
                <Route path="/Learn" element={<Learn />} />
                
                <Route path="/Terms" element={<Terms />} />
                
                <Route path="/SharedStoryView" element={<SharedStoryView />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}
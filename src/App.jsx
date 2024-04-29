import './App.css'

import { ProductProvider } from './state/ProductProvider/ProductProvider'
import { useAdsContext } from './state/AdsProvider/AdsProvider'

import { ProductsViewComponent } from './views/ProductsView/ProductsViewComponent'
import { ReadAdsViewComponent } from './views/ReadView/ReadAdsViewComponent'
import { UpdateViewComponent } from './views/UpdateView/UpdateViewComponent'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import BrowserRouter and Routes
import { MainLayout } from './layouts/MainLayout/MainLayout'
import { AdsProvider } from './state/AdsProvider/AdsProvider'
import { CreateViewComponent } from './views/CreateView/CreateViewComponent'

function App() {
    return (
        <div className="App">
            <ProductProvider>
                <AdsProvider>
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <MainLayout>
                                        <ProductsViewComponent />
                                    </MainLayout>
                                }
                            />

                            <Route
                                path="/read/:productId"
                                element={
                                    <MainLayout>
                                        <ReadAdsViewComponent />
                                    </MainLayout>
                                }
                            />

                            <Route
                                path="/update/:productId/:adId"
                                element={
                                    <MainLayout>
                                        <UpdateViewComponent />
                                    </MainLayout>
                                }
                            />
                            <Route
                                path="/create/:productId"
                                element={
                                    <MainLayout>
                                        <CreateViewComponent />
                                    </MainLayout>
                                }
                            />
                            <Route path="*" element={<>not found</>} />
                        </Routes>
                    </Router>
                </AdsProvider>
            </ProductProvider>
        </div>
    )
}

export default App

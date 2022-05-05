import './App.scss';
import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useDispatch} from "react-redux";
import {getDataThunk} from "./redux/getData/actions";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataThunk())
    }, [dispatch])

    return (
        <>
            <Header/>
                <main className='main'>
                    <AppRoutes/>
                </main>
            <Footer/>
        </>
    )
}

export default App
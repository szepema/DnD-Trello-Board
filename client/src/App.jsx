import React from "react";
import Home from "./pages/Home";
import AltHome from "./pages/Althome"
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Header from "./components/Header"
import AddButton from "./components/AddButton"

const App = () => {
    return (
        <DndProvider backend={Backend}>
            <Header />
            <AddButton />
            <Home />
        </DndProvider>
    );
};

export default App;
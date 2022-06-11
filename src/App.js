import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Calendar,
  ColorPicker,
  ColorMapping,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Line,
  Pyramid,
  Bar,
  Area,
  Stacked,
  Todo,
  Pie,
  Financial,
  Orders,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:bg-light-gray text-white"
                style={{ background: "blue", borderRedius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className="{
                activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
            }"
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              <ThemeSettings />
              <Routes>
                <Route path="/" element={<Ecommerce />}></Route>
                <Route path="/ecommerce" element={<Ecommerce />}></Route>

                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/employees" element={<Employees />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/customers" element={<Customers />}></Route>

                <Route path="/todo" element={<Todo />}></Route>
                <Route path="/editor" element={<Editor />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/colorPicker" element={<ColorPicker />}></Route>

                <Route path="/line" element={<Line />}></Route>
                <Route path="/area" element={<Area />}></Route>
                <Route path="/bar" element={<Bar />}></Route>
                <Route path="/pie" element={<Pie />}></Route>
                <Route path="/financial" element={<Financial />}></Route>
                <Route
                  path="/colour-mapping"
                  element={<ColorMapping />}
                ></Route>
                <Route path="/pyramid" element={<Pyramid />}></Route>
                <Route path="/stacked" element={<Stacked />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

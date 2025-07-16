import React from "react";
import Dashboard from "./Pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useState } from "react";

import Button from "@mui/material/Button";
export const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${
                  isSidebarOpen === true
                    ? "w-[20%] opacity-100"
                    : "w-[0px] opacity-0"
                } transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[80%]"
                } transition-all`}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
                <Sidebar />
              </div>

            </div>
          </section>
        </>
      )
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

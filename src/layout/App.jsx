
import { Outlet } from "react-router-dom";
import {Header} from '../components/Header';
function App() {
  
  return (
    <>
    <section className="bg-blue-900 text-slate-50 " >
      <Header/>
        <Outlet/>
    </section>
    </>
  )
}

export default App

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/slice";

function App() {
  const dispatch = useDispatch();

  const fetchTrending = async () => {
    try {
      const res = await axios("/trending/all/week");

      dispatch(setBannerData(res.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNav />
    </main>
  );
}

export default App;

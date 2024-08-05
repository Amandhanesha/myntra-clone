import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../index.css";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default App;

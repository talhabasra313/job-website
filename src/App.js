import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer/Footer";
import JobBanner from "./components/JobBanner/JobBanner";
import Jobs from "./components/Jobs/Jobs";

import Navbar from "./components/Navbar/Navbar";
import SearchForm from "./components/SearchForm/SearchForm";
import TopSection from "./components/TopSection/TopSection";

function App() {
  return (
    <div >
      <Navbar/>
      <TopSection/>
      <SearchForm/>
      <Jobs/>
      <JobBanner/>
      <Footer/>
    </div>
  );
}

export default App;

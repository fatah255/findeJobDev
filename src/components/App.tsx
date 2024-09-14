import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import BookmarkIcon from "./BookmarkIcon";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import JobList from "./JobList";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!searchText) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data.jobItems);
    };
    fetchData();
  }, [searchText]);
  return (
    <>
      <Background />
      <Header>
        <div className="header__top">
          <Logo />
          <BookmarkIcon />
        </div>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>

      <Container>
        <Sidebar>
          <JobList jobItems={jobItems} />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;

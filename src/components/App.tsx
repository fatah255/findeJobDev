import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import BookmarkIcon from "./BookmarkIcon";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import JobList from "./JobList";
import { useActiveId, useJobItem, useJobItems } from "../lib/hooks";

function App() {
  const [searchText, setSearchText] = useState("");
  const { jobItemsSlice, isLoading, numResults } = useJobItems(searchText);
  const activeId = useActiveId();
  const { jobItem, isLoading: isLoading2 } = useJobItem(activeId);
  useEffect(() => {
    console.log(activeId, jobItem);
  }, [activeId, jobItem]);

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
        <Sidebar numResults={numResults}>
          <JobList jobItems={jobItemsSlice} isLoading={isLoading} />
        </Sidebar>
        <JobItemContent isLoading={isLoading2} jobItem={jobItem} />
      </Container>
      <Footer />
    </>
  );
}

export default App;

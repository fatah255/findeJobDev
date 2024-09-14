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
import { BASE_API_URL } from "../lib/constants";

function App() {
  const [searchText, setSearchText] = useState("");
  const { jobItemsSlice, isLoading } = useJobItems(searchText);
  const activeId = useActiveId();
  const jobItem = useJobItem(activeId);
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
          <JobList jobItems={jobItemsSlice} isLoading={isLoading} />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;

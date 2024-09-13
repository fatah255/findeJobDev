import BookmarkIcon from "./BookmarkIcon";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header({ searchText, setSearchText }) {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <BookmarkIcon />
      </div>
      <SearchForm searchText={searchText} setSearchText={setSearchText} />
    </header>
  );
}

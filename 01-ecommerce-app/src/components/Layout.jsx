import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout({
  searchQuery,
  handleSearchChange,
  cartLength,
}) {
  return (
    <>
      <div className="page">
        <ToastContainer />
        <Header>
          <SearchForm
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
          <NavBar cartLength={cartLength} />
        </Header>

        <Outlet />

        {/* <Products searchQuery={searchQuery} /> */}
        <Footer />
      </div>
    </>
  );
}
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { regenerateSlug } from "@/lib/utils";
import { SearchAtom } from "@/store";

const Navbar = () => {
  const [, setSearch] = useAtom(SearchAtom);
  const [searchView, setSearchView] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { key: keyParams } = useParams();

  const isRoot = ["/", "/search"].includes(location.pathname);

  const navigateBack = () => {
    if (location.pathname === "/") setSearchView(false);
    navigate("/");
  };

  const onSearchFocus = () =>
    navigate("/search", {
      replace: true,
    });

  const onSearchEnter = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.code === "Enter") {
      setSearch(evt.currentTarget.value);
    }
  };

  const renderSearchWidget = () => {
    if (location.pathname === "/search") {
      return (
        <>
          <input
            className="w-full rounded py-2 px-4"
            placeholder="Cari Menu"
            onFocus={onSearchFocus}
            onKeyDown={onSearchEnter}
            autoFocus
          />
          <div
            role="button"
            className="absolute right-4 text-2xl font-bold text-gray-400"
            onClick={navigateBack}
          >
            &times;
          </div>
        </>
      );
    }

    return (
      <>
        <p className="text-lg font-bold text-white text-white">Masak Sih?</p>

        <div className="absolute right-0 flex items-center gap-4">
          <MagnifyingGlassIcon
            className="text-white w-5 h-5"
            role="button"
            onClick={() => navigate("/search")}
          />
          <BookmarkIcon className="text-white w-5 h-5" />
        </div>
      </>
    );
  };

  const renderRoot = () => {
    return (
      <div className="w-full flex justify-center items-center relative h-7">
        {renderSearchWidget()}
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-20 w-full p-4 bg-blue-500 border-b-2 border-black">
      <div className="relative w-full flex items-center justify-center max-w-md mx-auto navbar-container">
        {isRoot ? (
          renderRoot()
        ) : (
          <>
            <div
              className="absolute left-0 back-button"
              role="button"
              onClick={navigateBack}
            >
              <ArrowLeftIcon className="w-4 h-4 text-white" />
            </div>
            <p className="text-lg font-bold text-white capitalize">
              {regenerateSlug(keyParams ?? "")}
            </p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import theme from "../../styles/theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { useOutsideAlerter } from "../../utils/hooks/useOutsideAlerter";
import SearchSvgIcon from "../icons/SearchSvgIcon";

const SearchArea = ({ color }: interfaceConstant.MenuProps) => {
  const [open, setOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const handleClickButton = () => {
    !open ? setOpen(true) : alert("clicou");
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);
  console.log("porra de tema: ", color);
  console.log("porra de cor: ", theme.palette.primary.main);
  useEffect(() => {
    !open && setSearchWord("");
  }, [open]);

  return (
    <div ref={wrapperRef}>
      <input
        className={open && "open"}
        type="text"
        value={searchWord}
        placeholder={open ? "Pesquisar" : ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchWord(e.target.value)
        }
      />
      <button onClick={() => handleClickButton()}>
        <SearchSvgIcon
          width="16"
          height="16"
          fillColor={
            color === "dark"
              ? theme.palette.primary.main
              : !open
              ? "white"
              : theme.palette.primary.main
          }
          viewBox="0 0 15 15"
        />
      </button>
    </div>
  );
};

export default SearchArea;

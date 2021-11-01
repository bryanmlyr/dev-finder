import style from "./style.module.css";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

type searchBarProps = {
    callback: (obj: any) => any,
};

const SearchBar = (props: searchBarProps) => {
    const [value, setValue] = useState("");

    return (
        <div className={style.searchBarContainer}>
            <FiSearch className={style.searchIcon} />
            <input type="text" placeholder={"Search GitHub username..."} className={style.inputContainer} value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={
                ({ code }) => {
                    if (code === 'Enter') {
                        fetch(`https://api.github.com/users/${value}`, { headers: { Accept: 'application/vnd.github.v3+json' } })
                            .then((res) => res.json())
                            .then((json) => props?.callback(json))
                    }
                }

            } />
            <button className={style.buttonContainer} onClick={() => {
                fetch(`https://api.github.com/users/${value}`, { headers: { Accept: 'application/vnd.github.v3+json' } })
                    .then((res) => res.json())
                    .then((json) => props?.callback(json))
            }}>Search</button>
        </div >
    )
};

export default SearchBar;

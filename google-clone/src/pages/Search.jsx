import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {actionTypes } from "../reducer";

function Search({hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [inputSearch, setInputSearch] = useState('');
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: inputSearch
        })
        navigate('/search');
    };
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)}/>
                <MicIcon />
            </div>
            {
                !hideButtons ? (
                    <div className="search__buttons">
                <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
                ) : (
                    <div className="search__buttons">
                <Button onClick={search} type="submit" variant="outlined" className="search__buttonsHidden">Google Search</Button>
                <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>
                )
            }
            
        </form>
    )
}

export default Search;
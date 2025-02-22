import React from "react";
import "../Header/header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import imge from "../../assets/Image/NetflixLogo.svg";
const Header = () => {
  return (
    <div>
      <div class Name="header-outer-container">
        
        <div className="header-container">
          <div class Name="header-left">
            <ul>
              <li>
                <img src={imge} alt="Netflixlogo" width="100" />
              </li>
              <li>Home</li>
              <li>TvShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>BrowsebyLanguage</li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneOutlinedIcon/>
            </li>
            <AccountBoxIcon/>
            <li>
              
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

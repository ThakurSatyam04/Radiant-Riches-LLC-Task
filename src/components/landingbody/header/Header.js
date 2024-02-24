import React from "react";
import "./header.css";
import tickmark from '../../../assessts/IMAGE.png'
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div class="header-container">
        <h1>Best Website builders in the US</h1>
        <div class="line"></div>
        <div className="disclamer">
          <div>
            <span><span><img src={tickmark} alt="" /></span> Last Updated - February 22, 2020</span>
            <span><IoIosInformationCircleOutline /> Advertising Disclosure</span>
          </div>

          {/* dropdown */}
        </div>
        <div class="line"></div>

        <div class="selectItems">
          <ul>
            <li>Tools</li>
            <li>AWS Builder</li>
            <li>Start Build</li>
            <li>Build Supplies</li>
            <li>Tooling</li>
            <li>BlueHosting</li>
          </ul>
        </div>

        <div class="pathFollow">
          <ul>
            <li>Home </li>
            <li>
              <LiaGreaterThanSolid />
            </li>
            <li>Hosting for all </li>
            <li>
              <LiaGreaterThanSolid />
            </li>
            <li>Hosting </li>
            <li>
              <LiaGreaterThanSolid />
            </li>
            <li>Hosting6</li>
            <li>
              <LiaGreaterThanSolid />
            </li>
            <li>Hosting5</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

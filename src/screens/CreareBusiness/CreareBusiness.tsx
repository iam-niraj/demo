import React from "react";
import { IconsArrowBack24Px } from "../../icons/IconsArrowBack24Px";
import "./style.css";

export const CreareBusiness = (): JSX.Element => {
  return (
    <div className="creare-business">
      <div className="div">
        <div className="frame">
          <div className="group">
            <img className="img" alt="Group" src="/img/group-1000001943.png" />
            <div className="frame-2">
              <img className="vector" alt="Vector" src="/img/vector-3.png" />
              <div className="overlap-group">
                <div className="ellipse" />
                <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
                <img className="group-2" alt="Group" src="/img/group-1000001944.png" />
              </div>
            </div>
          </div>
          <div className="navigation-bar">
            <div className="frame-3">
              <img className="img-2" alt="Material symbols" src="/img/material-symbols-home.svg" />
              <div className="label-text">Home</div>
            </div>
            <div className="frame-3">
              <img className="img-2" alt="Mdi heart" src="/img/mdi-heart.svg" />
              <div className="text-wrapper">Favorite</div>
            </div>
            <div className="frame-3">
              <div className="img-2">
                <img className="icon" alt="Icon" src="/img/icon.svg" />
              </div>
              <div className="text-wrapper">Account</div>
            </div>
          </div>
        </div>
        <div className="icons-arrow-back-wrapper">
          <IconsArrowBack24Px className="icons-arrow-back" color="#1C1E36" />
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Create Business Profile</div>
        </div>
        <div className="overlap">
          <div className="frame-wrapper">
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-3">Business Name</div>
                <div className="frame-6">
                  <img className="img-3" alt="Icon park outline" src="/img/icon-park-outline-shop.svg" />
                  <div className="text-wrapper-4">Enter your Business Name</div>
                </div>
              </div>
              <div className="frame-5">
                <div className="frame-7">
                  <div className="text-wrapper-5">Business Description</div>
                  <div className="text-wrapper-6">0/200</div>
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-4">Enter Description</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-7">Mailing Address</div>
          <div className="frame-9">
            <div className="text-wrapper-8">Street Address</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-8">City</div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-9">State</div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-10">Zip Code</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-8">Street Address</div>
          </div>
          <div className="text-wrapper-11">Billing Address</div>
          <div className="frame-14">
            <div className="text-wrapper-8">Street Address</div>
          </div>
          <div className="frame-15">
            <div className="text-wrapper-8">City</div>
          </div>
          <div className="frame-16">
            <div className="text-wrapper-9">State</div>
          </div>
          <div className="frame-17">
            <div className="text-wrapper-10">Zip Code</div>
          </div>
          <div className="frame-18">
            <div className="text-wrapper-8">Street Address</div>
          </div>
          <div className="frame-19">
            <div className="text-wrapper-12">Submit</div>
          </div>
          <div className="input-radio">
            <div className="vector-wrapper">
              <img className="vector-3" alt="Vector" src="/img/vector.svg" />
            </div>
          </div>
          <div className="text-wrapper-13">Same as Mailing Address</div>
          <div className="frame-20">
            <div className="text-wrapper-14">Phone Number</div>
            <div className="frame-21">
              <div className="frame-22">
                <div className="text-wrapper-15">+1</div>
                <img className="img-3" alt="Gridicons dropdown" src="/img/gridicons-dropdown.svg" />
              </div>
              <img className="line" alt="Line" src="/img/line-3.svg" />
              <div className="text-wrapper-16">Enter your number</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

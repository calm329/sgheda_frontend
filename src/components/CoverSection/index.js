import React from "react";
import {
  CoverContainer,
  CoverBg,
  ImageBg,
  CoverContent,
  CoverH1,
  CoverBtnWrapper,
  CoverH2,
} from "./CoverElements";
import { PurchaseLink } from "./CoverElements";
import { FaCheckCircle } from "react-icons/fa";
import Video from "../../videos/intro.mp4";
const CoverSection = () => {
  return (
    <CoverContainer style={{ justifyContent: "flex-start" }}>
      <CoverBg style={{}}>
        <ImageBg src="image/back1.png" type="video/mp4" />
      </CoverBg>
      <CoverContent style={{ marginLeft: "5%" }}>
        <div style={{ width: "35%" }}>
          <CoverH1
            style={{ marginBottom: 10, fontSize: "40px", textAlign: "center" }}
          >
            Slinky Ground Heat Exchanger Design & Analysis – SGHEDA
          </CoverH1>

          <CoverH2 style={{ textAlign: "center", marginBottom: 15 }}>
            A program for design and analysis of GHE system that utilizes a
            slinky loop configuration
          </CoverH2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <CoverH1 style={{ fontSize: "30px", padding: "10px" }}>
              <FaCheckCircle
                style={{ color: "#FFFFFF", fontSize: "25px", marginRight: 10 }}
              />
              Commercial
            </CoverH1>
            <CoverH1 style={{ fontSize: "30px", padding: "10px" }}>
              <FaCheckCircle
                style={{ color: "#FFFFFF", fontSize: "25px", marginRight: 10 }}
              />
              Geothermal
            </CoverH1>
            <CoverH1 style={{ fontSize: "30px", padding: "10px" }}>
              <FaCheckCircle
                style={{ color: "#FFFFFF", fontSize: "25px", marginRight: 10 }}
              />
              Better Design
            </CoverH1>
          </div>
          <CoverBtnWrapper>
            <PurchaseLink>Purchase</PurchaseLink>
          </CoverBtnWrapper>
        </div>
        <div style={{ width: "55%" }}>
          <video
            src={Video}
            controls
            autoPlay
            loop
            muted
            type="video/mp4"
            style={{ width: "90%", borderRadius: "10px" }}
          ></video>
        </div>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;

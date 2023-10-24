import React from "react";
import { CoverContainer, CoverContent, CoverH1, VideoBg } from "./WorkElements";
import Video from "../../videos/video.mp4";
const WorkSection = () => {
  return (
    <CoverContainer style={{ justifyContent: "flex-start", marginTop: -300 }}>
      <CoverContent style={{ marginTop: "15%" }}>
        <CoverH1> HOW IT WORKS</CoverH1>
      </CoverContent>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VideoBg
          style={{ borderRadius: "20px" }}
          controls
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </div>
    </CoverContainer>
  );
};

export default WorkSection;

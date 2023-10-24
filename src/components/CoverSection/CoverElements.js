import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1200px;
  position: relative;
`;

export const CoverBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const CoverContent = styled.div`
  width: 95%;
  position: absolute;
  top: 30vh;
  left: 0;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CoverH1 = styled.h1`
  color: #fff;
  font-family: Josefin Sans;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 15;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CoverH2 = styled.h1`
  color: #fff;
  font-family: Josefin Sans;
  font-size: 22px;
  text-align: center;
  font-weight: 200;

  @media screen and (max-width: 768px) {
    font-size: 19px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CoverP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CoverBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const PurchaseLink = styled(Link)`
  border-radius: 10px;
  background: var(
    --new-btn-color,
    linear-gradient(180deg, #415a8a 0%, #571c1f 100%)
  );
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(
      --new-btn-color,
      linear-gradient(180deg, #316a7a 0%, #672c3f 100%)
    );
  }
`;

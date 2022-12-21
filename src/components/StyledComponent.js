import Slider from "rc-slider";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 3rem;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;
`;

export const StyledSlider = styled(Slider)`
  width: 400px;
  margin-top: 1rem;
  margin-bottom: 4rem;

  .rc-slider-rail {
    height: 30px;
    border: 1px solid #ccc;
    background-color: transparent;
    border-radius: 5rem;
    &::after {
      white-space: pre;
      position: relative;
      top: 5px;
      color: #a6a6a6;
      right: ${(props) => (props.name === "amount" ? "-78%" : "-87%")};
      content: "${(props) => {
        if (props.name.toLowerCase() === "amount")
          return `${props.max.toLocaleString("sv-SE")} kr`;
        else return `${props.max.toLocaleString("sv-SE")} år`;
      }}";
    }
  }
  .rc-slider-track {
    height: 30px;
    background-color: #582f87;
    border-radius: 5rem;
  }

  .rc-slider-handle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-color: #fff;
    background-color: #582f87;
    top: -1px;
    opacity: 1;
  }

  .rc-slider-handle:focus,
  .rc-slider-handle:focus-visible,
  .rc-slider-handle:active,
  .rc-slider-handle:hover,
  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: #fff;
    box-shadow: none;
  }

  .rc-slider-handle::before {
    white-space: pre;
    position: relative;
    top: 15px;
    color: #fff;
    left: ${(props) => (props.name === "amount" ? "-90px" : "-50px")};
    content: "${(props) => {
      if (props.name.toLowerCase() === "amount")
        return `${props.value.toLocaleString("sv-SE")} kr`;
      else return `${props.value.toLocaleString("sv-SE")} år`;
    }}";
  }
`;

export const StyledButton = styled.button`
  padding: 1rem;
  border: 0;
  outline: 0;
  background-color: #1ec887;
  color: #fff;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 15px;
  float: right;
  cursor: pointer;
`;

export const StyledNotification = styled.div`
  display: inline-block;
  background-color: #582f87;
  padding: 2rem;
  color: #fff;
  position: relative;
  border-radius: 0.3rem;
  line-height: 1.7rem;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 30px;
    bottom: -20px;
    width: 0;
    height: 0;
    border-right: 40px solid transparent;
    border-top: 50px solid #582f87;
  }
`;

import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
  background-color:#2d3142;
  font-size:1.6rem;
  border:none;
  border-radius:50%;
  position:fixed;
  bottom:30px;
  right:30px;
  height:70px;
  width:70px;
  box-shadow:2px 2px rgba(0,0,0,0.5);
  cursor:pointer;
  color:white;
`;

const AddNewBtn = (props) => {
  return (
    <Button
      onClick={() => {
        props.showFormHandler(!props.isShowBirthdayForm);
      }}
    >
      {props.isShowBirthdayForm ? "x" : "+"}
    </Button>
  );
};

export default AddNewBtn;

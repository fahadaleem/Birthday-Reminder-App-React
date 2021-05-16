import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
  display:flex;
  align-items:center;
  margin:15px 0;
  background-color:#2d3142;
  color:white;
  border-radius:5px;
  padding:10px 15px;

`;

const Icon = Styled.i`
  background-color:#2d3142;
  font-size:32px;
  height:50px;
  width:50px;
  padding-top:10px;
  text-align:center;
  margin-right:25px;
  border-radius:35px;
  color:white;
`;

const Heading = Styled.h1`
  font-size:1.6rem;
`;

const DisplayBirthday = (props) => {
  return (
    <Container>
      <Icon
        className={props.gender === "male" ? "fa fa-male" : "fa fa-female"}
        aria-hidden="true"
      ></Icon>
      <Heading>
        {props.name} - {props.age} years old
      </Heading>
    </Container>
  );
};

export default DisplayBirthday;

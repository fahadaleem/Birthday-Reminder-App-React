import React from "react";
import Styled from "styled-components";
import Swal from "sweetalert2";

const Form = Styled.form`
  background-color:#2d3142;
  padding:25px;
  color:#bfc0c0;
  margin-top:30px;
`;

const Title = Styled.h1`
  text-align:center;
  text-transform:uppercase;
  margin-bottom:20px;
`;

const GenderBtns = Styled.button`
  border:none;
  padding:25px 40px;
  margin:15px 20px;
  font-size:1.2rem;
  cursor:pointer;
  font-weight:bold;
  background-color:"#ccc5b9";
  color:${(props) => (props.selected ? "white" : "black")}
  `;

const TextBox = Styled.input`
  padding:15px 20px;
  width:${(props) => (props.fullWidth ? "100%" : "30%")};
  font-size:22px;
  margin:10px 0;
  outline:none;
  margin:${(props) => props.mx === 3 && "0 15px"}
`;

const SubmitBtn = Styled.button`
border:2px solid white;
  padding:10px 40px;
  font-size:1.2rem;
  cursor:pointer;
  font-weight:bold;
  width:50%;
  margin:20px 0;
  background-color:#2d3142;
  color:white;
  font-size:28px;
  border-radius:40px;
  transition:0.4s;
  &:hover{
    background-color:#ccc5b9;
    color:#2d3142;
    transition:0.4s;
  }
`;

const AddNewBirthday = (props) => {
  const [selectedGender, setSeletedGender] = React.useState("");
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleSubmitData = (e) => {
    e.preventDefault();
    (!date || !month || !year || !name || !selectedGender) &&
      Swal.fire({
        /* title: "Error!", */
        text: "Enter all the fields!",
        icon: "error"
      });

    if (date && month && year && name && selectedGender)
      Swal.fire({
        /* title: "Error!", */
        text: "Data added successfully!",
        icon: "success"
      }).then(() => {
        const data = {
          name,
          gender: selectedGender,
          dateOfBirth: `${date}-${month}-${year}`
        };
        props.handleaddNewBirthday(data);
        setSeletedGender("");
        setName("");
        setDate("");
        setYear("");
        setMonth("");
        props.handleSetShowBirthdayForm(false);
      });
  };

  return (
    <Form
      style={
        !props.isShowBirthdayForm ? { display: "none" } : { display: "block" }
      }
      onSubmit={handleSubmitData}
    >
      {/* <h1>Hello</h1> */}
      <Title>
        Add New Birthday <span role="img">🎂</span>
      </Title>
      <div style={{ textAlign: "center" }}>
        <GenderBtns
          male
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setSeletedGender("male");
            /* props.setGenderHandler("male"); */
          }}
          style={{ backgroundColor: selectedGender === "male" && "#f15156" }}
        >
          MALE
        </GenderBtns>
        <GenderBtns
          female
          type="button"
          style={{ backgroundColor: selectedGender === "female" && "#f15156" }}
          onClick={(e) => {
            e.preventDefault();
            setSeletedGender("female");
            /* props.setGenderHandler("female"); */
          }}
        >
          FEMALE
        </GenderBtns>
      </div>
      <TextBox
        placeholder="Enter Name*"
        onChange={(e) => setName(e.target.value)}
        fullWidth
        value={name}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextBox
          type="number"
          onChange={(e) => setDate(e.target.value)}
          placeholder="DD*"
          min="1"
          max="30"
          mx="3"
          value={date}
        />
        <TextBox
          type="number"
          onChange={(e) => setMonth(e.target.value)}
          placeholder="MM*"
          min="1"
          max="12"
          mx="3"
          value={month}
        />
        <TextBox
          type="number"
          placeholder="YYYY*"
          min="1950"
          max="2021"
          mx="3"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </div>
    </Form>
  );
};

export default AddNewBirthday;

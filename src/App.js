import "./styles.css";
import React, { useState } from "react";
import styled from "styled-components";
import AddNewBtn from "./Components/AddNewBtn";
import AddNewBirthday from "./Components/AddNewBirthday";
import DisplayBirthday from "./Components/DisplayBirthday";
const App = styled.div`
  background-color: #bfc0c0;
  color: #2d3142;
  display: flex;
  justify-content: center;
  /* margin-top:4rem; */
  min-width: 65%;
  margin: 4rem auto;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-family: "Quicksand", sans-serif;
  text-align: center;
`;

export default function BirthdayReminderApp() {
  const [isShowBirthdayForm, setIsShowBirthdayForm] = useState(false);
  const [gender, setGender] = useState("");
  const [birthdays, setBirthdays] = useState(
    localStorage.getItem("birthdays")
      ? JSON.parse(localStorage.getItem("birthdays"))
      : []
  );
  const [todaysBirthday, setTodaysBirthday] = useState([]);

  const addNewBirthdayHandler = (data) => {
    setBirthdays([...birthdays, data]);
  };

  const calculateAge = (dob) => {
    const year = dob.split("-")[2];
    return new Date().getFullYear() - parseInt(year);
  };

  const getTodaysBirthday = () => {
    const filteredBirthdays = birthdays.filter((element) => {
      const day = element.dateOfBirth.split("-")[0];
      const month = element.dateOfBirth.split("-")[1];
      const currentDay = new Date().getDate();
      const currentMonth = new Date().getMonth() + 1;
      return parseInt(day) === currentDay && parseInt(month) === currentMonth;
    });

    console.log(filteredBirthdays);
    setTodaysBirthday(filteredBirthdays);
  };

  React.useEffect(() => {
    getTodaysBirthday();
    localStorage.setItem("birthdays", JSON.stringify(birthdays));
  }, [birthdays]);

  return (
    <App>
      <div>
        <H1>Birthday Reminder App</H1>
        <AddNewBtn
          isShowBirthdayForm={isShowBirthdayForm}
          showFormHandler={setIsShowBirthdayForm}
        />
        <AddNewBirthday
          handleSetShowBirthdayForm={setIsShowBirthdayForm}
          isShowBirthdayForm={isShowBirthdayForm}
          setGenderHandler={setGender}
          handleaddNewBirthday={addNewBirthdayHandler}
        />
        {todaysBirthday.length > 0 ? (
          <div style={{ display: isShowBirthdayForm ? "none" : "block" }}>
            <H1>Todays Birthday</H1>
            {todaysBirthday.map((element, index) => {
              return (
                <DisplayBirthday
                  key={index}
                  age={calculateAge(element.dateOfBirth)}
                  name={element.name}
                  gender={element.gender}
                />
              );
            })}
          </div>
        ) : (
          <H1
            style={{
              marginTop: "50px",
              display: isShowBirthdayForm ? "none" : "block"
            }}
          >
            There is no birthday today
          </H1>
        )}
      </div>
    </App>
  );
}

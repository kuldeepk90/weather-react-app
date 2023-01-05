import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;

  @media only screen and (max-width: 500px) {
    display:flex;
    flex-direction:column;
  }
  `
  const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: #74ebd5 solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: #74ebd5;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: white;
  margin: 0 19px;
  font-size: 18px;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
    <Container>
      <WelcomeWeatherLogo src={"/icons/weather-img.svg"} />
        <Wrapper>
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
        </Wrapper>
      </Container>
    </>
  );
};
export default CityComponent;

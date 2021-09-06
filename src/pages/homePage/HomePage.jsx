import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import Button from "../../components/Button";
import UserInfo from "./UserInfo";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 30px;
  align-items: center;
  padding: 40px;
`;
const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  padding: 20px;
  margin-bottom: 12px;
`;
const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  color: var(--color-dark);
  padding-bottom: 20px;
`;
const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  align-items: center;
`;
const StyledInput = styled.input`
  height: 40px;
  border: 2px solid var(--color-dark);
  border-radius: 4px;
`;

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [login, setLogin] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const showUser = () => {
    setLogin(inputValue);
    setInputValue("");
  };

  return (
    <Wrapper>
      <UserInfoWrap>
        <Block>
          <Title>Enter user login </Title>
          <InputWrap>
            <StyledInput
              type="text"
              name="input"
              value={inputValue}
              onChange={handleChange}
            />
            <Button
              title="send"
              disabled={!inputValue ? "disabled" : ""}
              handleClick={showUser}
            />
          </InputWrap>
        </Block>
        {login && (
          <Block>
            <UserInfo login={login} />
          </Block>
        )}
      </UserInfoWrap>
    </Wrapper>
  );
};

export default HomePage;

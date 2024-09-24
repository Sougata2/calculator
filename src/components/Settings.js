import styled from "styled-components";
import { makeQuestion } from "../features/question/questionSlice";
import {
  add,
  divide,
  multiply,
  substract,
} from "../features/setting/settingSlice";
import { useDispatch } from "react-redux";

const StyledSettings = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  font-size: 15px;
`;

function Settings() {
  const dispatch = useDispatch();
  return (
    <StyledSettings>
      <Button
        onClick={() => {
          dispatch(multiply());
          dispatch(makeQuestion());
        }}
      >
        Multiply
      </Button>
      <Button
        onClick={() => {
          dispatch(add());
          dispatch(makeQuestion());
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          dispatch(substract());
          dispatch(makeQuestion());
        }}
      >
        Substract
      </Button>
      <Button
        onClick={() => {
          dispatch(divide());
          dispatch(makeQuestion());
        }}
      >
        Divide
      </Button>
    </StyledSettings>
  );
}

export default Settings;

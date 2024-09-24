import { useDispatch, useSelector } from "react-redux";
import { makeQuestion, solve } from "../features/question/questionSlice";
import { useEffect } from "react";
import { multiply } from "../features/setting/settingSlice";
import styled from "styled-components";

const StyledQuestion = styled.div`
  margin-top: 90px;
  font-size: 30px;
`;
function Question() {
  const dispatch = useDispatch();
  const { operator } = useSelector((store) => store.setting);
  const { firstNumber, secondNumber } = useSelector((store) => store.question);

  useEffect(
    function () {
      dispatch(multiply());
      dispatch(makeQuestion());
    },
    [dispatch]
  );

  useEffect(
    function () {
      if (!operator) return;
      dispatch(solve(firstNumber, secondNumber, operator));
    },
    [dispatch, firstNumber, operator, secondNumber]
  );

  return (
    <StyledQuestion>
      {firstNumber} {operator} {secondNumber}
    </StyledQuestion>
  );
}

export default Question;

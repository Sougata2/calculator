import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { check, makeQuestion } from "../features/question/questionSlice";
import styled from "styled-components";

const StyledOption = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  font-size: 17px;
`;

function Option() {
  const dispatch = useDispatch();
  const { answer } = useSelector((store) => store.question);
  const { operator } = useSelector((store) => store.setting);
  const [options, setOptions] = useState([]);

  useEffect(
    function () {
      const opts = [answer, answer - 10, answer - 20, answer + 4];
      opts.sort(() => Math.random() - 0.5);
      setOptions([...opts]);
    },
    [answer]
  );

  return (
    <StyledOption>
      {options.map((option) => (
        <Button
          key={option}
          onClick={() => {
            dispatch(check(option));
            if (option === answer) dispatch(makeQuestion());
          }}
        >
          {operator === "/" ? option.toFixed(2) : option}
        </Button>
      ))}
    </StyledOption>
  );
}

export default Option;

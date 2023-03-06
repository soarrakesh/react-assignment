import { ChangeEventHandler } from "react";
import styled from "styled-components";

type DataLimitProps = {
  name: string;
  id: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  selectedOption: number | string;
};

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

const SelectLabel = styled.label`
  margin-right: 10px;
  font-family: "Segoe UI", Arial, sans-serif;
`;

const DataLimit = (props: DataLimitProps) => {
  const { name, id, onChange, selectedOption } = props;
  const options = [10, 25, 50, "all"];
  return (
    <SelectWrapper>
      <SelectLabel>Select items to display in chart</SelectLabel>
      <select name={name} id={id} onChange={onChange} value={selectedOption}>
        {options.map((option, i) => (
          <option key={`key-${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};

export default DataLimit;

import React, { useState } from "react";
import {
  InputFieldsWrapper,
  TaraWrapper,
  OrasWrapper,
} from "../other/styledComponents";
const InputDataFields = () => {
  const [oras, setOras] = useState("Cluj Napoca");
  return (
    <>
      <InputFieldsWrapper>
        <p>Seteaza un oras si o tara:</p>
        <TaraWrapper>
          Tara:{" "}
          <select>
            <option value="ro">Romania</option>
          </select>
        </TaraWrapper>
        <OrasWrapper>
          Oras:{" "}
          <input
            Type="text"
            onChange={(e) => setOras(e.target.value)}
            value={oras}
          />
        </OrasWrapper>
        <button>Actualizeaza Vremea</button>
      </InputFieldsWrapper>
    </>
  );
};
export default InputDataFields;

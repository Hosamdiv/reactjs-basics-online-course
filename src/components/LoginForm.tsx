import { ChangeEvent, useState } from "react";
import { IUserData } from "../interfaces/interface";
import { formInputList } from "../data/FormInputList";

interface IProps {
  propse: string;
  abouteTest: string;
  isLoggedIn: boolean;
  setIsloggedIn: (val: boolean) => void;
  datals: IUserData;
  setDatals: (user: IUserData) => void;
}

const LoginForm = ({ setIsloggedIn, setDatals, datals }: IProps) => {
  const [removeArr, setRemoveArr] = useState(formInputList);

  // ** Handlers
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setDatals({
      ...datals,
      [name]: value,
    });
    console.log(value);
  };

  const removeInput = (id: string) => {
    setRemoveArr((prevArr) => 
      prevArr.filter((input) => input.id !== id));
    console.log(`Remove ${id}`);
  };

  const formInputLists = removeArr.map((input) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }} 
      key={input.id}>
        <div className="input-wrapper">
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            id={input.id}
            value={datals[input.name] || ""}
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={() => removeInput(input.id)}>X {input.id}</button>
      </div>
    );
  });

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={(e) => e.preventDefault()}>
        {formInputLists}
        <button className="input-wrapper" onClick={() => setIsloggedIn(true)}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;



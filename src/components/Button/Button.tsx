import { ReactNode } from "react";
import "./Button.css";
import { useGlobalContext } from "../../context/global.provider";

interface Props {
  children: ReactNode;
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const ChildrenButton = ({ children }: ChildrenProps) => {
  const { value } = useGlobalContext();
  return (
    <div className="color-red">
      {value}:{children}
    </div>
  );
};

export const Button = ({ children, parentMethod }: Props) => {
  const { setValue } = useGlobalContext();

  const handleClick = () => {
    setValue(10);
    parentMethod();
  };

  return (
    <>
      <button className="custom-button" onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

//El context debe usarse cuando son componentes hermanos, no debe de usarse cuando
//son componentes padres e hijos, para eso se debe de usar props o el patrón composition

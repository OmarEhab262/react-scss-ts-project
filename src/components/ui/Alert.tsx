import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertTypes } from "../../types";

interface Iprops {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}
const Alert = ({ type, icon, title, description, children }: Iprops) => {
  return (
    <>
      <div className={type}>
        <div className="head">
          <div className="left">
            {icon}
            <h2>{title}</h2>
          </div>
          <div className="right">
            <X />
          </div>
        </div>

        {children ? children : <p>{description}</p>}
      </div>
    </>
  );
};

export default Alert;

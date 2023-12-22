// IMPORT REACTDOM FOR DOM OPERATIONS
import ReactDOM from "react-dom/client";

// IMPORT REACT IN FULL AND REACT USESTATE HOOK
import React, { useState } from "react";

// IMPORT BUTTON COMPONENT
import Button from "../button/button";

// IMPORT SVG FILES TO COMPOSE THE DIALOG ICON
import SuccessSvg from "./icons/success/success";
import DangerSvg from "./icons/danger/danger";
import QuestionSvg from "./icons/question/question";
import InfoSvg from "./icons/info/info";
import WarningSvg from "./icons/warning/warning";

// GROUP THE ICONS SVG INTO AN OBJECT
const iconsList: any = {
  success: <SuccessSvg />,
  danger: <DangerSvg />,
  question: <QuestionSvg />,
  info: <InfoSvg />,
  warning: <WarningSvg />,
};

// IMPORT STYLESHEET FILE FOR THE DIALOG COMPONENT
import "../../styles/dialog.css";

// DEFINE THE ICONS TYPES
type icons = "success" | "danger" | "info" | "question" | "warning";

// DEFINE THE STYLES TYPES
type styles =
  | "btn-primary"
  | "btn-secondary"
  | "btn-danger"
  | "btn-success"
  | "btn-info"
  | "btn-dark"
  | "btn-light"
  | "btn-none";

// DEFINE THE POSITIONS TYPES
type positions =
  | "top-center"
  | "top-left"
  | "top-right"
  | "center"
  | "center-left"
  | "center-right"
  | "bottom-center"
  | "bottom-left"
  | "bottom-right";

// DEFINE THE WHOLE DIALOG TYPES
type AlertProps = {
  title?: string;
  text?: string;
  showCancelButton?: boolean;
  cancelButtonStyle?: styles;
  cancelButtonText?: string;
  showConfirmButton?: boolean;
  confirmButtonStyle?: styles;
  confirmButtonText?: string;
  showCloseButton?: boolean;
  html?: string;
  htmlx?: any;
  icon?: icons;
  position?: positions;
};

// FUNCTION TO APPEND THE NEW ALERT DOM COMPONENT INTO THE HTML FILE
const appendAlert = (props?: AlertProps): Promise<boolean> => {
  const container = document.createElement("div");

  document.body.appendChild(container);

  const root = (ReactDOM as any).createRoot(container);
  return new Promise((resolve) => {
    root.render(
      <AlertBox
        onClose={(value: boolean) => {
          setTimeout(() => {
            root.unmount();
            document.body.removeChild(container);
            resolve(value);
          }, 100);
        }}
        alertProps={props}
      />
    );
  });
};

// ALERT BOX CONTENT PROPS TYPES
type AlertBoxProps = {
  onClose: any;
  alertProps?: AlertProps;
};

// DIALOG CONTENT BOX
const AlertBox = ({ onClose, alertProps }: AlertBoxProps): any => {
  const [showAlert, setShowAlert] = useState(true);

  const handleConfirm = () => {
    setShowAlert(false);
    onClose(true);
  };

  const handleCancel = () => {
    setShowAlert(false);
    onClose(false);
  };


  // DOM ELEMENT OF THE CLOSE BUTTON
  const CloseAlertSvg = () => {
    return (
      <svg version="1.1" viewBox="0 0 130.2 130.2">
        <line
          className="path"
          fill="none"
          stroke="#606060"
          stroke-width="6"
          stroke-linecap="round"
          x1="40.2"
          y1="40.2"
          x2="90"
          y2="90"
        />
        <line
          className="path"
          fill="none"
          stroke="#606060"
          stroke-width="6"
          stroke-linecap="round"
          x1="90"
          y1="40.2"
          x2="40.2"
          y2="90"
        />
      </svg>
    );
  };

  // RETURN THE CONTENT BOX DOM ELEMENT
  return (
    <div
      className={`alertMainBox ${
        showAlert ? "showAlertMainBox" : "hideAlertMainBox"
      } ${alertProps?.position ?? "center"}`}
    >
      <div
        className={"alertBackLayerBox"}
        onClick={() => {
          handleCancel();
        }}
      ></div>
      <div
        className={`alertBox ${showAlert ? "showAlertBox" : "hideAlertBox"}`}
      >
        {alertProps?.showCloseButton && (
          <div
            className={"alertBoxCloseButton"}
            onClick={() => {
              handleCancel();
            }}
          >
            <CloseAlertSvg />
          </div>
        )}
        {alertProps?.icon && (
          <div className={"alertBoxTitleIcon"}>
            {iconsList[alertProps?.icon ?? "success"]}
          </div>
        )}
        <div className={"alertBoxTitle"}>{alertProps?.title}</div>
        <div className={"alertBoxTitleContent"}>{alertProps?.text}</div>
        {alertProps?.htmlx && (
          <div className={"alertBoxTitleContent"}>{alertProps?.htmlx}</div>
        )}
        {alertProps?.html && (
          <div
            className={"alertBoxTitleContent"}
            dangerouslySetInnerHTML={{ __html: alertProps?.html }}
          ></div>
        )}
        <div className={"alertButtonsBox"}>
          <Button
            options={{
              label: alertProps?.confirmButtonText ?? "Ok",
              style: alertProps?.confirmButtonStyle ?? "btn-success",
            }}
            onClick={() => {
              handleConfirm();
            }}
          />
          {alertProps?.showCancelButton && (
            <Button
              options={{
                label: alertProps?.cancelButtonText ?? "Cancel",
                style: alertProps?.cancelButtonStyle ?? "btn-danger",
              }}
              onClick={() => {
                handleCancel();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// METHOD TO FIRE THE DIALOG BOX
const show = async (props: AlertProps): Promise<boolean> => {
  const result: boolean = await appendAlert(props);
  return result;
};

// DIALOG BOX TYPE
type DialogType = {
  show: (props: AlertProps) => Promise<boolean>;
};

// RETUR OBJECT
const dialog: DialogType = {
  show,
};

// DEFAULT EXPORT
export default dialog;

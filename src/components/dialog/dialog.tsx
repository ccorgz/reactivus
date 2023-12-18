import ReactDOM from "react-dom/client";

import React, { useState } from "react";

import "../../styles/dialog.css";

type styles =
  | "btn-primary"
  | "btn-secondary"
  | "btn-danger"
  | "btn-success"
  | "btn-info"
  | "btn-dark"
  | "btn-light"
  | "btn-none";

type AlertProps = {
  title?: string;
  showCancelButton?: boolean;
  cancelButtonStyle?: styles;
  showConfirmButton?: boolean;
  confirmlButtonStyle?: styles;
  html?: string;
  jsxHtml?: any;
};

const appendAlert = (props?: AlertProps): Promise<boolean> => {
  const container = document.createElement("div");

  document.body.appendChild(container);

  const root = (ReactDOM as any).createRoot(container);
  return new Promise((resolve) => {
    root.render(
      <AlertBox
        onClose={(value: boolean) => resolve(value)}
        alertProps={props}
      />
    );
  });
};

type AlertBoxProps = {
  onClose: any;
  alertProps?: AlertProps;
};

const AlertBox = ({ onClose, alertProps }: AlertBoxProps): any => {
  const [showAlert, setShowAlert] = useState(true);

  // const handleConfirm = () => {
  //   setShowAlert(false);
  //   onClose(true);
  // };

  const handleCancel = () => {
    setShowAlert(false);
    onClose(false);
  };
  if (showAlert)
    return (
      <div className={"alertMainBox"}>
        <div
          className={"alertBackLayerBox"}
          onClick={() => {
            handleCancel();
          }}
        ></div>
        <div className={"alertBox"}>
          <div className={"alertBoxTitleIcon"}></div>
          <div className={"alertBoxTitle"}>{alertProps?.title}</div>
          <div className={"alertBoxTitleContent"}></div>
          <div className={"alertButtonsBox"}></div>
        </div>
      </div>
    );
};

const show = async (props?: AlertProps): Promise<boolean> => {
  console.log("props :", props);
  const result: boolean = await appendAlert(props);
  return result;
};

const dialog = {
  show: show,
};

export default dialog;

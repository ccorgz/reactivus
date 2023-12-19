import ReactDOM from "react-dom/client";

import React, { useState } from "react";

import Button from "../button/button";

import SuccessSvg from "./icons/success/success";
import DangerSvg from "./icons/danger/danger";
import QuestionSvg from "./icons/question/question";
import InfoSvg from "./icons/info/info";
import WarningSvg from "./icons/warning/warning";

const iconsList: any = {
  success: <SuccessSvg />,
  danger: <DangerSvg />,
  question: <QuestionSvg />,
  info: <InfoSvg />,
  warning: <WarningSvg />,
};

import "../../styles/dialog.css";

type icons = "success" | "danger" | "info" | "question" | "warning";

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
  text?: string;
  showCancelButton?: boolean;
  cancelButtonStyle?: styles;
  cancelButtonText?: string;
  showConfirmButton?: boolean;
  confirmButtonStyle?: styles;
  confirmButtonText?: string;
  html?: string;
  jsxHtml?: any;
  icon?: icons;
};

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

type AlertBoxProps = {
  onClose: any;
  alertProps?: AlertProps;
};

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

  return (
    <div
      className={`alertMainBox ${
        showAlert ? "showAlertMainBox" : "hideAlertMainBox"
      }`}
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
        <div className={"alertBoxTitleIcon"}>
          {iconsList[alertProps?.icon ?? "success"]}
        </div>
        <div className={"alertBoxTitle"}>{alertProps?.title}</div>
        <div className={"alertBoxTitleContent"}>{alertProps?.text}</div>
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

const show = async (props: AlertProps): Promise<boolean> => {
  const result: boolean = await appendAlert(props);
  return result;
};

type DialogType = {
  show: (props: AlertProps) => Promise<boolean>;
};

const dialog: DialogType = {
  show,
};

export default dialog;

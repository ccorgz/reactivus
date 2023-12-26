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
  /**
   * Title to be displayed as a header in the dialog.
   */
  title?: string;
  /**
   * Description text to be displayed right bellow the title.
   */
  text?: string;
  /**
   * Controls wether the cancel button is visible or not.
   */
  showCancelButton?: boolean;
  /**
   * Defines in wich style pattern the cancel button will be shown.
   */
  cancelButtonStyle?: styles;
  /**
   * Defines the text to be displayed in the cancel button.
   */
  cancelButtonText?: string;
  /**
   * Controls wether the confirm button is visible or not.
   */
  showConfirmButton?: boolean;
  /**
   * Defines in wich style pattern the confirm button will be shown.
   */
  confirmButtonStyle?: styles;
  /**
   * Defines the text to be displayed in the confirm button.
   */
  confirmButtonText?: string;
  /**
   * Controls wether the close button is visible or not.
   */
  showCloseButton?: boolean;
  /**
   * Defines a HTML string to be rendered right bellow the text.
   */
  html?: string;
  /**
   * Defines a HTMLX object to be rendered right bellow the text.
   */
  htmlx?: HTMLElement;
  /**
   * Defines wich animated icons will be displayed.
   */
  icon?: icons;
  /**
   * Defines wich screen position the dialog will be shown.
   */
  position?: positions;
};

// DEFINE THE DIALOG RETURN TYPES
type DialogReturn = {
  /**
   * Indicates whether the user confirmed the dialog at the confirm button.
   */
  isConfirmed: boolean;
  /**
   * Indicates whether the user canceled the dialog at the cancel button.
   */
  isCanceled: boolean;
  /**
   * Indicates whether the user aborted the dialog at the close button or the backLayer box.
   */
  isAborted: boolean;
};

// FUNCTION TO APPEND THE NEW ALERT DOM COMPONENT INTO THE HTML FILE
const appendAlert = (props?: AlertProps): Promise<DialogReturn> => {
  const container = document.createElement("div");

  document.body.appendChild(container);

  const root = (ReactDOM as any).createRoot(container);
  return new Promise((resolve) => {
    root.render(
      <AlertBox
        onClose={(value: DialogReturn) => {
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
    onClose({
      isConfirmed: true,
      isCanceled: false,
      isAborted: false,
    });
  };

  const handleCancel = () => {
    setShowAlert(false);
    onClose({
      isConfirmed: false,
      isCanceled: true,
      isAborted: false,
    });
  };

  const handleAbort = () => {
    setShowAlert(false);
    onClose({
      isConfirmed: false,
      isCanceled: false,
      isAborted: true,
    });
  };

  // DOM ELEMENT OF THE CLOSE BUTTON
  const CloseAlertSvg = () => {
    return (
      <svg version="1.1" viewBox="0 0 130.2 130.2">
        <line
          className="reactivus-path"
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
          className="reactivus-path"
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
      className={`reactivus-alertMainBox ${
        showAlert ? "reactivus-showAlertMainBox" : "reactivus-hideAlertMainBox"
      } reactivus-${alertProps?.position ?? "reactivus-center"}`}
    >
      <div
        className={"reactivus-alertBackLayerBox"}
        onClick={() => {
          handleAbort();
        }}
      ></div>
      <div
        className={`reactivus-alertBox ${showAlert ? "reactivus-showAlertBox" : "reactivus-hideAlertBox"}`}
      >
        {alertProps?.showCloseButton && (
          <div
            className={"reactivus-alertBoxCloseButton"}
            onClick={() => {
              handleAbort();
            }}
          >
            <CloseAlertSvg />
          </div>
        )}
        {alertProps?.icon && (
          <div className={"reactivus-alertBoxTitleIcon"}>
            {iconsList[alertProps?.icon ?? "success"]}
          </div>
        )}
        <div className={"reactivus-alertBoxTitle"}>{alertProps?.title}</div>
        <div className={"reactivus-alertBoxTitleContent"}>{alertProps?.text}</div>
        {alertProps?.htmlx && (
          <div className={"reactivus-alertBoxTitleContent"}>{alertProps?.htmlx}</div>
        )}
        {alertProps?.html && (
          <div
            className={"reactivus-alertBoxTitleContent"}
            dangerouslySetInnerHTML={{ __html: alertProps?.html }}
          ></div>
        )}
        <div className={"reactivus-alertButtonsBox"}>
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
const show = async (props: AlertProps): Promise<DialogReturn> => {
  const result: DialogReturn = await appendAlert(props);
  return result;
};

// DIALOG BOX TYPE
type DialogType = {
  show: (props: AlertProps) => Promise<DialogReturn>;
};

// RETUR OBJECT
const dialog: DialogType = {
  show,
};

// DEFAULT EXPORT
export default dialog;

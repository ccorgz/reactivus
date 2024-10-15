"use client";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import Button from "../button/button";
import SuccessSvg from "./icons/success/success";
import DangerSvg from "./icons/danger/danger";
import QuestionSvg from "./icons/question/question";
import InfoSvg from "./icons/info/info";
import WarningSvg from "./icons/warning/warning";
import "../../styles/dialog.css";

const iconsList: any = {
  success: <SuccessSvg />,
  danger: <DangerSvg />,
  question: <QuestionSvg />,
  info: <InfoSvg />,
  warning: <WarningSvg />,
};

type icons = "success" | "danger" | "info" | "question" | "warning";

type styles =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "info"
  | "dark"
  | "light"
  | "none";

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

type AlertProps = {
  /**
   * Title to be displayed as a header in the dialog.
   */
  title?: string;
  /**
   * Title to be displayed as a top-left header in the dialog.
   */
  headerTitle?: string;
  /**
   * Description text to be displayed right bellow the title.
   */
  text?: string;
  /**
   * Controls if the cancel button is visible or not.
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
   * Controls if the confirm button is visible or not.
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
   * Controls if the close button is visible or not.
   */
  showCloseButton?: boolean;
  /**
   * Controls if the dialog closes when clicked outside or not.
   */
  allowClose?: boolean;
  /**
   * Defines a HTML string to be rendered right bellow the text.
   */
  html?: string;
  /**
   * Defines a HTMLX object to be rendered right bellow the text.
   */
  htmlx?: HTMLElement | any;
  /**
   * Defines a HTMLX object to be rendered as the header of the dialog.
   */
  customHeader?: HTMLElement | any;
  /**
   * Defines if the dialog is mainly custom or not.
   */
  isCustomDialog?: boolean;
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
   * Indicates if the user confirmed the dialog at the confirm button.
   */
  isConfirmed: boolean;
  /**
   * Indicates if the user canceled the dialog at the cancel button.
   */
  isCanceled: boolean;
  /**
   * Indicates if the user aborted the dialog at the close button or the backLayer box.
   */
  isAborted: boolean;
};

// FUNCTION TO APPEND THE NEW ALERT DOM COMPONENT INTO THE HTML FILE
const appendAlert = (props?: AlertProps): Promise<DialogReturn> => {
  const container = document.createElement("div");
  container.id = "r-dialog-container";

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

  const handleOutsideAbort = () => {
    if (alertProps?.allowClose == false) {
      return;
    } else {
      handleAbort();
    }
  };

  // DOM ELEMENT OF THE CLOSE BUTTON
  const CloseAlertSvg = () => {
    return (
      <svg version="1.1" viewBox="0 0 130.2 130.2">
        <line
          className="r-path"
          fill="none"
          stroke="#606060"
          strokeWidth="6"
          strokeLinecap="round"
          x1="40.2"
          y1="40.2"
          x2="90"
          y2="90"
        />
        <line
          className="r-path"
          fill="none"
          stroke="#606060"
          strokeWidth="6"
          strokeLinecap="round"
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
      className={`r-alertMainBox ${
        showAlert ? "r-showAlertMainBox" : "r-hideAlertMainBox"
      } r-${alertProps?.position ?? "r-center"}`}
    >
      <div
        className={"r-alertBackLayerBox"}
        onClick={() => {
          handleOutsideAbort();
        }}
      ></div>
      <div
        className={`r-alertBox ${
          showAlert ? "r-showAlertBox" : "r-hideAlertBox"
        }`}
        id={"r-dialog-box"}
        style={{
          padding: alertProps?.isCustomDialog ? "10px" : "15px",
          gap: alertProps?.isCustomDialog ? "0px" : "20px",
          justifyContent: alertProps?.isCustomDialog ? "flex-start" : "center",
        }}
      >
        {alertProps?.headerTitle && (
          <div className={"r-alertBoxHeaderTitle"}>
            {alertProps?.headerTitle}
          </div>
        )}
        {alertProps?.showCloseButton && (
          <div
            className={"r-alertBoxCloseButton"}
            onClick={() => {
              handleAbort();
            }}
          >
            <CloseAlertSvg />
          </div>
        )}
        {alertProps?.icon && (
          <div className={"r-alertBoxTitleIcon"}>
            {iconsList[alertProps?.icon ?? "success"]}
          </div>
        )}
        {alertProps?.title && (
          <div className={"r-alertBoxTitle"}>{alertProps?.title}</div>
        )}
        <div className={"r-alertBoxTitleContent"}>{alertProps?.text}</div>
        {alertProps?.customHeader && (
          <div className={"r-alertBoxTitleContent"}>
            {alertProps?.customHeader}
          </div>
        )}
        {alertProps?.htmlx && (
          <div className={"r-htmlx-content"}>{alertProps?.htmlx}</div>
        )}
        {alertProps?.html && (
          <div
            className={"r-alertBoxTitleContent"}
            dangerouslySetInnerHTML={{ __html: alertProps?.html }}
          ></div>
        )}
        {!alertProps?.isCustomDialog && (
          <div className={"r-alertButtonsBox"}>
            {alertProps?.showConfirmButton && (
              <Button
                label={alertProps?.confirmButtonText ?? "Ok"}
                color={alertProps?.confirmButtonStyle ?? "success"}
                onClick={() => {
                  handleConfirm();
                }}
              />
            )}
            {alertProps?.showCancelButton && (
              <Button
                label={alertProps?.cancelButtonText ?? "Cancel"}
                color={alertProps?.cancelButtonStyle ?? "danger"}
                onClick={() => {
                  handleCancel();
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// METHOD TO FIRE THE DIALOG BOX
const show = async (props: AlertProps): Promise<DialogReturn> => {
  const result: DialogReturn = await appendAlert(props);
  return result;
};
const hide = async () => {
  const alertBoxElement = document.getElementById("r-dialog-box");
  const container = document.getElementById("r-dialog-container");

  container?.classList.add("r-hideAlertMainBox");
  alertBoxElement?.classList.add("r-hideAlertBox");

  setTimeout(() => {
    if (container && document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }, 500);
};

// DIALOG BOX TYPE
type DialogType = {
  /**
   * Show a dialog alert box.
   */
  show: (props: AlertProps) => Promise<DialogReturn>;
  /**
   * Hide the dialog alert box.
   */
  hide: () => void;
};

// RETUR OBJECT
const dialog: DialogType = {
  show,
  hide,
};

// DEFAULT EXPORT
export default dialog;

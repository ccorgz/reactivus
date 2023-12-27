// IMPORT REACT IN FULL AND REACT USESTATE HOOK
import React from "react";

// IMPORT STYLESHEET FILE FOR THE DIALOG COMPONENT
import "../../styles/toast.css";

// CREATE ALL THE ICONS
const icons = {
  success: () => {
    const successIcon = document.createElement("span");
    successIcon.className = "reactivus-toast-icon-success";
    const successIconStem = document.createElement("span");
    successIconStem.className = "reactivus-checkmark-stem";
    const successIconKick = document.createElement("span");
    successIconKick.className = "reactivus-checkmark-kick";
    successIcon.appendChild(successIconStem);
    successIcon.appendChild(successIconKick);
    return successIcon;
  },
  danger: () => {
    const dangerIcon = document.createElement("span");
    dangerIcon.innerText = "!";
    dangerIcon.className = "reactivus-toast-icon-danger";
    return dangerIcon;
  },
  warning: () => {
    const dangerIcon = document.createElement("span");
    dangerIcon.className = "reactivus-toast-icon-warning";
    return dangerIcon;
  },
  info: () => {
    const dangerIcon = document.createElement("span");
    dangerIcon.innerText = "i";
    dangerIcon.className = "reactivus-toast-icon-info";
    return dangerIcon;
  },
};

// DEFINE THE STYLES TYPES
type styles = "success" | "danger" | "warning" | "info";

// DEFINE THE POSITIONS TYPES
type positions = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// TOAST CONTAINER TO HOLD EVERY TOAST INSIDE OF IT
type ContainerProps = {
  /**
   * Indicates the time for the toast to auto close.
   */
  autoClose?: number;
  /**
   * Defines wether the toast will close on click.
   */
  closeOnClick: boolean;
  /**
   * Defines in wich position the toast will be shown.
   */
  position: positions;
};

// DEFINE A STRING FOR THE TOAST CONTAINER ID
const toastContainerId = "reactivus-toast-container";

// METHOD THAT HANDLE THE TOAST CONTAINER
const ToastContainer = (props: ContainerProps) => {
  // PERSISTS THE CONTAINER DATA INTO LOCALSTORAGE
  localStorage.setItem(
    "reactivus.toast.container.props",
    JSON.stringify(props)
  );
  return (
    <div id={toastContainerId} className="reactivus-toast-container-box"></div>
  );
};

// PRIVATE METHOD TO APPEND A TOAST TO THE CONTAINER
const appendToastToContainer = (toastElement: any) => {
  const container = document.getElementById(toastContainerId);

  const containerProps = JSON.parse(
    localStorage.getItem("reactivus.toast.container.props") ?? ""
  );

  if (container) {
    container.appendChild(toastElement);
    containerProps.closeOnClick &&
      toastElement.addEventListener("click", () => {
        toastElement.style.animation = "hideToLeft .2s ease forwards";
        setTimeout(() => {
          container?.removeChild(toastElement);
        }, 350);
      });
  } else {
    console.error(`Container with ID "${toastContainerId}" not found.`);
  }

  setTimeout(() => {
    if (
      containerProps.autoClose &&
      toastElement &&
      toastElement.parentNode === container
    ) {
      toastElement.style.animation = "hideToLeft .2s ease forwards";
      setTimeout(() => {
        container?.removeChild(toastElement);
      }, 350);
    }
  }, containerProps.autoClose ?? 3000);
};

// TOAST BOX
const createToast = (style: styles, text: string, props?: ContainerProps) => {
  // DEFINES THE CONTAINER PROPS OBJECT
  const containerProps: ContainerProps = props
    ? props
    : JSON.parse(localStorage.getItem("reactivus.toast.container.props") ?? "");

  const toastElement = document.createElement("div");
  toastElement.id = "reactivus-toast-box";
  toastElement.className = `reactivus-toast-box reactivus-toast-${style}`;

  const toastContentElement = document.createElement("div");
  toastContentElement.className = `reactivus-toast-content-box`;
  const toastContentIconElement = icons[style]();

  const toastContentTextElement = document.createElement("div");
  toastContentTextElement.innerText = text;

  toastContentElement.appendChild(toastContentIconElement);
  toastContentElement.appendChild(toastContentTextElement);

  const timeBarElement = document.createElement("div");
  timeBarElement.className = "reactivus-toast-time-bar";
  if (containerProps.autoClose) {
    timeBarElement.style.animation = `toastTimeBar ${
      containerProps.autoClose / 1000
    }s linear`;
  }
  toastElement.appendChild(toastContentElement);
  toastElement.appendChild(timeBarElement);

  return toastElement;
};

// METHOD TO HANDLE A NEW SUCCESS TOAST
const success = (text: string, props?: ContainerProps) => {
  const successToast = createToast("success", text, props);
  appendToastToContainer(successToast);
};

// METHOD TO HANDLE A NEW DANGER TOAST
const danger = (text: string, props?: ContainerProps) => {
  const successToast = createToast("danger", text, props);
  appendToastToContainer(successToast);
};

// METHOD TO HANDLE A NEW INFO TOAST
const info = (text: string, props?: ContainerProps) => {
  const successToast = createToast("info", text, props);
  appendToastToContainer(successToast);
};

// METHOD TO HANDLE A NEW WARNING TOAST
const warning = (text: string, props?: ContainerProps) => {
  const successToast = createToast("warning", text, props);
  appendToastToContainer(successToast);
};

// DEFINE THE TOAST TYPES
type types = "success" | "danger" | "info" | "warning";

// TOAST TYPES
type ToastType = {
  success: (text: string, props?: ContainerProps) => void;
  danger: (text: string, props?: ContainerProps) => void;
  info: (text: string, props?: ContainerProps) => void;
  warning: (text: string, props?: ContainerProps) => void;
};

// RETURN OBJECT
const toast: ToastType = {
  success,
  danger,
  info,
  warning,
};

// DEFAULT EXPORT
export default toast;

// CONTAINER EXPORT
export { ToastContainer };

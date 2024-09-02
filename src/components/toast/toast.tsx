// IMPORT REACT IN FULL AND REACT USESTATE HOOK
import React from "react";

// IMPORT STYLESHEET FILE FOR THE DIALOG COMPONENT
import "../../styles/toast.css";

// CREATE ALL THE ICONS
const icons = {
  success: () => {
    const successIcon = document.createElement("span");
    successIcon.className = "r-toast-icon-success";
    successIcon.innerHTML = "✓";
    return successIcon;
  },
  error: () => {
    const dangerIcon = document.createElement("span");
    dangerIcon.innerText = "!";
    dangerIcon.className = "r-toast-icon-error";
    return dangerIcon;
  },
  warning: () => {
    const dangerIcon = document.createElement("span");
    dangerIcon.className = "r-toast-icon-warning";
    return dangerIcon;
  },
  info: () => {
    const dangerIcon = document.createElement("span");
    dangerIcon.innerText = "i";
    dangerIcon.className = "r-toast-icon-info";
    return dangerIcon;
  },
};

// DEFINE THE STYLES TYPES
type styles = "success" | "error" | "warning" | "info";

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
  /**
   * Defines if the pause option will be available on the toast.
   */
  pauseOnHover?: boolean;
};

// DEFINE A STRING FOR THE TOAST CONTAINER ID
const toastContainerId = "reactivus-toast-container";

// METHOD THAT HANDLE THE TOAST CONTAINER
const ToastContainer = (props: ContainerProps) => {
  const dataAttributeString = JSON.stringify(props ?? "");

  return (
    <div
      className={`r-toast-container-box ${
        props.position ? "r-toast-" + props.position : "r-toast-top-right"
      }`}
    >
      <div
        className={`r-toast-container-toasts-box`}
        id={toastContainerId}
        {...{ ["data-props"]: dataAttributeString }}
      ></div>
    </div>
  );
};

// PRIVATE METHOD TO APPEND A TOAST TO THE CONTAINER
const appendToastToContainer = (toastElement: any) => {
  const container = document.getElementById(toastContainerId);

  const containerDataProps = container?.dataset ? container?.dataset.props : "";
  const containerProps: ContainerProps = containerDataProps
    ? JSON.parse(containerDataProps ?? "")
    : {};

  toastElement.classList.add(
    containerProps.position
      ? containerProps.position == "bottom-right" ||
        containerProps.position == "top-right"
        ? "r-toast-show-right"
        : "r-toast-show-left"
      : "r-toast-show-left"
  );

  if (container) {
    container.appendChild(toastElement);
    containerProps.closeOnClick &&
      toastElement.addEventListener("click", () => {
        toastElement.style.animation = containerProps.position
          ? containerProps.position == "bottom-right" ||
            containerProps.position == "top-right"
            ? "hideToRight .2s ease forwards"
            : "hideToLeft .2s ease forwards"
          : "hideToLeft .2s ease forwards";
        setTimeout(() => {
          if (toastElement && toastElement.parentNode === container) {
            container?.removeChild(toastElement);
          }
        }, 350);
      });
  } else {
    console.error(`Container with ID "${toastContainerId}" not found.`);
  }

};

const createCloseSvgIcon = () => {
  const svgNamespace = "http://www.w3.org/2000/svg";

  const svgElementBox = document.createElement("div");
  svgElementBox.className = `r-toast-close-svg`;

  const svgElement = document.createElementNS(svgNamespace, "svg");
  svgElement.setAttribute("xmlns", svgNamespace);
  svgElement.setAttribute("viewBox", "-8 -8 48 48");
  svgElement.setAttribute("width", "18");
  svgElement.setAttribute("height", "18");
  svgElement.setAttribute("fill", "none");
  svgElement.setAttribute("stroke", "currentColor");
  svgElement.setAttribute("stroke-width", "6");
  svgElement.setAttribute("stroke-linecap", "round");
  svgElement.setAttribute("stroke-linejoin", "round");

  const pathElement = document.createElementNS(svgNamespace, "path");
  pathElement.setAttribute("d", "M2,2 L30,30 M2,30 L30,2");

  svgElement.appendChild(pathElement);
  svgElementBox.appendChild(svgElement);
  return svgElementBox;
};

// TOAST BOX
const createToast = (style: styles, text: string, props?: ContainerProps) => {
  // DEFINES THE CONTAINER PROPS OBJECT
  const container = document.getElementById(toastContainerId);
  const containerDataProps = container?.dataset ? container?.dataset.props : "";
  const containerProps: ContainerProps = containerDataProps
    ? JSON.parse(containerDataProps ?? "")
    : {};

  const toastElement = document.createElement("div");
  toastElement.id = "r-toast-box";
  toastElement.className = `r-toast-box r-toast-${style}`;

  const toastCloseSvgContent = createCloseSvgIcon();
  toastElement.appendChild(toastCloseSvgContent);

  const toastContentElement = document.createElement("div");
  toastContentElement.className = `r-toast-content-box`;

  const toastContentIconBoxElement = document.createElement("span");
  toastContentIconBoxElement.className = `r-toast-icon-box`;
  const toastContentIconElement = icons[style]();
  toastContentIconBoxElement.appendChild(toastContentIconElement);

  const toastContentTextElement = document.createElement("div");
  toastContentTextElement.innerText = text;

  toastContentElement.appendChild(toastContentIconBoxElement);
  toastContentElement.appendChild(toastContentTextElement);

  const timeBarElement = document.createElement("div");
  timeBarElement.className = "r-toast-time-bar";
  if (containerProps.autoClose) {
    timeBarElement.style.animation = `toastTimeBar ${
      containerProps.autoClose / 1000
    }s linear`;
  }
  toastElement.appendChild(toastContentElement);
  toastElement.appendChild(timeBarElement);

  // Add event listeners to control the animation play state
  // toastElement.addEventListener("mouseenter", () => {
  //   timeBarElement.style.animationPlayState = "paused";
  // });

  // toastElement.addEventListener("mouseleave", () => {
  //   timeBarElement.style.animationPlayState = "running";
  // });

  // Variable to store the timeout ID and the remaining time
  let autoCloseTimeout: NodeJS.Timeout;
  let remainingTime = containerProps.autoClose ?? 3000;
  let startTime: number;

  // Function to start the timeout
  const startAutoCloseTimeout = () => {
    startTime = Date.now();
    autoCloseTimeout = setTimeout(() => {
      if (
        containerProps.autoClose &&
        toastElement &&
        toastElement.parentNode === container
      ) {
        toastElement.style.animation = containerProps.position
          ? containerProps.position === "bottom-right" ||
            containerProps.position === "top-right"
            ? "hideToRight .2s ease forwards"
            : "hideToLeft .2s ease forwards"
          : "hideToLeft .2s ease forwards";
        setTimeout(() => {
          container?.removeChild(toastElement);
        }, 350);
      }
    }, remainingTime);
  };

  // Start the auto-close timeout initially
  startAutoCloseTimeout();

  // Add event listeners to control the animation play state and timeout
  const handleMouseEnter = () => {
    if (containerProps.pauseOnHover) {
      timeBarElement.style.animationPlayState = "paused";
      clearTimeout(autoCloseTimeout);
      remainingTime -= Date.now() - startTime;
    }
  };

  const handleMouseLeave = () => {
    if (containerProps.pauseOnHover) {
      timeBarElement.style.animationPlayState = "running";
      startAutoCloseTimeout();
    }
  };

  toastElement.addEventListener("mouseenter", handleMouseEnter);
  toastElement.addEventListener("mouseleave", handleMouseLeave);

  return toastElement;
};

// METHOD TO HANDLE A NEW SUCCESS TOAST
const success = (text: string, props?: ContainerProps) => {
  const successToast = createToast("success", text, props);
  appendToastToContainer(successToast);
};

// METHOD TO HANDLE A NEW DANGER TOAST
const error = (text: string, props?: ContainerProps) => {
  const successToast = createToast("error", text, props);
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

// METHOD TO DISMISS ALL TOASTS
const dismiss = () => {
  const container = document.getElementById(toastContainerId);
  while (container && container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

// TOAST TYPES
type ToastType = {
  /**
   * Show a toast with a success (green) style.
   */
  success: (text: string, props?: ContainerProps) => void;
  /**
   * Show a toast with a danger (red) style.
   */
  error: (text: string, props?: ContainerProps) => void;
  /**
   * Show a toast with a info (blue) style.
   */
  info: (text: string, props?: ContainerProps) => void;
  /**
   * Show a toast with a warning (orange/yellow) style.
   */
  warning: (text: string, props?: ContainerProps) => void;
  /**
   * Dismiss all the toasts.
   */
  dismiss: () => void;
};

// RETURN OBJECT
const toast: ToastType = {
  success,
  error,
  info,
  warning,
  dismiss,
};

// DEFAULT EXPORT
export default toast;

// CONTAINER EXPORT
export { ToastContainer };

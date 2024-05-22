// IMPORT REACT HOOKS
import React, { useEffect, useRef, useState } from "react";

// IMPORT STYLESHEET FILE FOR THE SELECT COMPONENT
import "../../../styles/inputs/select.css";
import ReactDOM from "react-dom";

// DEFINE THE SELECT PROPERTIES TYPES
type SelectInputProps = {
  /**
   * Text to be displayed as a label above the component.
   */
  label?: string;
  /**
   * Custom value for width style of the component.
   */
  width?: string;
  /**
   * React state with value to be set to the component.
   */
  value?: any;
  /**
   * Array containing the defualt value to be displayed in the component.
   */
  defaultValue?: any;
  /**
   * Array with the options to be listed in the component.
   */
  options: Array<any>;
  /**
   * Name of the property to be displayed by default in the options list of the component.
   */
  optionLabel: string;
  /**
   * Custom element to be rendered in the options list of the component.
   */
  optionTemplate?: HTMLElement | any;
  /**
   * Custom data label string that defines wich field will be displayed at the selected fields.
   */
  selectedLabel?: string;
  /**
   * Boolean to control if must be rendered a filter option in the component.
   */
  filter?: boolean;
  /**
   * String to be displayed as a placeholder in the filter text of the component.
   */
  filterPlaceHolder?: string;
  /**
   * String containing the list of fields that the search logic mus consider in the component.
   */
  filterBy?: string;
  /**
   * String to be displayed by default in the component.
   */
  placeholder?: string;
  /**
   * Boolean that controls if multi options can be selected in the component.
   */
  multiSelect?: boolean;
  /**
   * Boolean that controls if the option to select all the options at once will be abled in the component.
   */
  selectAll?: boolean;
  /**
   * Function that returns the value of the component.
   */
  onChange: (selectedOption: any) => void;
  /**
   * Defines a custom className object to be set as the input box styles.
   */
  className?: any;
} & ({} extends { multiSelect: boolean } ? { value: any } : {});

// EXPORTS COMPONENT BY DEFAULT
export default function Select({
  label,
  width,
  value,
  defaultValue,
  options,
  optionLabel,
  selectedLabel,
  optionTemplate,
  filter,
  filterPlaceHolder,
  filterBy,
  placeholder,
  multiSelect,
  onChange,
  selectAll,
  className,
  ...rest
}: SelectInputProps & Record<string, unknown>) {
  const [showOptions, setShowOptions] = useState(false);

  const [optionsList, setOptionsList] = useState<Array<any>>(options ?? []);

  const [optionLabelState, setOptionLabelState] = useState<string>(
    placeholder ?? ""
  );

  const [selectionList, setSelectionList] = useState<any>([]);

  const [higherLengthString, setHigherLengthString] = useState(0);

  const titleBoxRef = useRef<any>(null);

  useEffect(() => {
    if (options == optionsList) {
      return;
    }

    setOptionsList(options ?? []);

    document.addEventListener("scroll", handleGetInputCoordinates);
    return () => {
      document.removeEventListener("scroll", handleGetInputCoordinates);
    };
  }, [titleBoxRef, value, options]);

  useEffect(() => {
    if (optionsList.length > 0) {
      let higgherValueString = 0;
      for (let i = 0; i < options.length; i++) {
        const option = options[i][optionLabel];
        higgherValueString =
          option.length >= higgherValueString
            ? option.length
            : higgherValueString;
      }
      setHigherLengthString(
        higgherValueString > optionLabel.length
          ? higgherValueString
          : optionLabel.length
      );
    }
  }, [optionsList]);

  useEffect(() => {
    setSelectionList(typeof value == "string" ? [value] : value);
  }, [value]);

  useEffect(() => {
    if (defaultValue && defaultValue[optionLabel] && !value) {
      setOptionLabelState(defaultValue[optionLabel]);
    } else {
      handleOptionLabelStateDefinition(selectionList);
    }
  }, [selectionList]);

  const handleOptionLabelStateDefinition = (values: any) => {
    let valueToSet = "";
    if (multiSelect) {
      valueToSet = values
        ?.map((v: any) => {
          return selectedLabel ? v[selectedLabel] : v[optionLabel] ?? "";
        })
        .join(", ");
    } else {
      valueToSet =
        values && values[0] && typeof values != "string"
          ? values.join(", ")
          : "";
    }
    valueToSet =
      valueToSet.slice(-2) == ", " ? valueToSet.slice(0, -2) : valueToSet;
    if (valueToSet == "" && !placeholder) {
      valueToSet = selectedLabel ? selectedLabel : optionLabel;
    } else if (valueToSet == "" && placeholder) {
      valueToSet = placeholder;
    }
    if (value && value[optionLabel]) {
      valueToSet = selectedLabel ? value[selectedLabel] : value[optionLabel];
    }
    setOptionLabelState(valueToSet);
  };
  const handleClickOutside = (event: any) => {
    if (
      titleBoxRef.current &&
      !titleBoxRef.current.contains(event.target) &&
      event.target.closest(".reactivus-select-options-box") === null
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    if (!showOptions && onChange && multiSelect) {
      onChange({ value: selectionList });
    }
    const handleClick = (event: any) => {
      if (titleBoxRef.current && !titleBoxRef.current.contains(event.target)) {
        handleClickOutside(event);
      }
    };
    if (showOptions) {
      handleGetInputCoordinates();
    } else {
      const element = document.querySelector(".reactivus-select-options-box");
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [titleBoxRef, showOptions]);

  const handleGetInputCoordinates = () => {
    const titleBoxRect = titleBoxRef.current.getBoundingClientRect();
    const { x, y, height, width, top, bottom, left, right } = titleBoxRect;
    const isClosestToTop = top < window.innerHeight - bottom;
    const maxHeight = isClosestToTop ? (window.innerHeight - y) / 2 : y / 2;
    const inputProps = {
      x: x,
      y: y,
      height: height,
      width: width,
      top: top,
      bottom: bottom,
      isClosestToTop: isClosestToTop,
      topDistance: y + height + 15,
      bottomDistance: window.innerHeight - y + height / 2,
      maxHeight: maxHeight,
      left: left,
      right: right,
    };
    appendOptionsBoxToBody(inputProps);
  };

  const handleOptionsFilter = (filterText: string) => {
    if (filterText != "" && filterBy) {
      let filteredList = [];
      let filterFields = filterBy?.split(",") ?? [];
      for (let i = 0; i < options.length; i++) {
        let optionValue = options[i];
        for (let j = 0; j < filterFields.length; j++) {
          if (
            optionValue[filterFields[j]]
              .toString()
              .toUpperCase()
              .includes(filterText.toUpperCase())
          ) {
            filteredList.push(optionValue);
          }
        }
      }
      setOptionsList(filteredList ?? []);
    } else {
      setOptionsList(options ?? []);
    }
  };

  const isChecked = (option: any) => {
    const isOptionInList = selectionList.some(
      (p: any) => JSON.stringify(p) === JSON.stringify(option)
    );
    return isOptionInList;
  };

  function appendOptionsBoxToBody(inputProps: any) {
    const div = document.createElement("div");
    div.className = `reactivus-select-options-box reactivus-select-options-box-${
      showOptions ? "show" : "hide"
    }`;
    div.style.top = inputProps.isClosestToTop
      ? inputProps.topDistance + "px"
      : "";
    div.style.bottom = inputProps.isClosestToTop
      ? ""
      : inputProps.bottomDistance + "px";
    div.style.left = inputProps.left + "px";
    div.style.width = inputProps.width + "px";
    div.style.flexDirection = inputProps.isClosestToTop
      ? "column"
      : "column-reverse";
    div.style.maxHeight = showOptions ? inputProps.maxHeight + "px" : "0";

    const filterCheckbox = filter || selectAll;
    if (filterCheckbox) {
      const span = document.createElement("span");
      span.className = `reactivus-select-item-box reactivus-select-filter-box`;
      span.style.zIndex = "9999";

      if (selectAll) {
        const selectAllCheckbox = document.createElement("input");
        selectAllCheckbox.type = "checkbox";
        selectAllCheckbox.id = "reactivusSelectAllCheckbox";
        selectAllCheckbox.className = "reactivus-select-filter-box-checkbox";
        selectAllCheckbox.onclick = () => {
          if (selectionList.length === optionsList.length) {
            setSelectionList([]);
          } else {
            setSelectionList(optionsList);
          }
        };
        span.appendChild(selectAllCheckbox);
      }

      if (!filter) {
        const filterBoxLabel = document.createElement("span");
        filterBoxLabel.className = "reactivus-select-filter-box-label";
        filterBoxLabel.textContent = "Todos";
        filterBoxLabel.onclick = () => {
          if (selectionList.length === optionsList.length) {
            setSelectionList([]);
          } else {
            setSelectionList(optionsList);
          }
          const allCheck = document.getElementById(
            "reactivusSelectAllCheckbox"
          ) as HTMLInputElement;
          if (allCheck && allCheck.checked) {
            allCheck.checked = false;
          } else if (allCheck) {
            allCheck.checked = true;
          }
        };
        span.appendChild(filterBoxLabel);
      }

      if (filter) {
        const filterBoxText = document.createElement("input");
        filterBoxText.type = "text";
        filterBoxText.className = "reactivus-select-filter-box-text";
        filterBoxText.placeholder = filterPlaceHolder ?? "Search";
        filterBoxText.onchange = (e: Event) => {
          const target = e.target as HTMLInputElement;
          handleOptionsFilter(target.value);
        };
        span.appendChild(filterBoxText);
      }

      const closeIconSpan = document.createElement("span");
      closeIconSpan.className = "reactivus-select-title-icon-close";
      closeIconSpan.onclick = () => {
        setSelectionList([]);
        setShowOptions(!showOptions);
        const allCheck = document.getElementById(
          "reactivusSelectAllCheckbox"
        ) as HTMLInputElement;
        if (allCheck && allCheck.checked) {
          allCheck.checked = false;
        }
      };

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("viewBox", "-8 -8 48 48");
      svg.setAttribute("width", "18");
      svg.setAttribute("height", "18");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("strokeWidth", "4");
      svg.setAttribute("strokeLinecap", "round");
      svg.setAttribute("strokeLinejoin", "round");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("d", "M2,2 L30,30 M2,30 L30,2");
      svg.appendChild(path);

      closeIconSpan.appendChild(svg);
      span.appendChild(closeIconSpan);

      div.appendChild(span);
    }

    optionsList?.forEach((option, index) => {
      const span = document.createElement("span");
      span.className = `reactivus-select-item-box`;
      span.onclick = () => {
        if (multiSelect) {
          setSelectionList((prev: any) => {
            const isOptionInList = prev.some(
              (p: any) => JSON.stringify(p) === JSON.stringify(option)
            );
            if (isOptionInList) {
              return prev.filter(
                (p: any) => JSON.stringify(p) !== JSON.stringify(option)
              );
            } else {
              return [...prev, option];
            }
          });
        } else {
          onChange && onChange({ value: option });
          if (!value) {
            value = option;
            handleOptionLabelStateDefinition([option]);
          }
          setShowOptions(false);
        }
      };

      if (multiSelect) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isChecked(option);
        checkbox.onchange = () => {}; // Placeholder function, as onchange handler required for input[type="checkbox"]
        span.appendChild(checkbox);
      }

      const optionText = optionTemplate
        ? optionTemplate(option)
        : option[optionLabel ?? ""] ?? option;

      if (React.isValidElement(optionText)) {
        // ReactDOM.render(optionText, span);
        const root = (ReactDOM as any).createRoot(span);
        root.render(optionText);
      } else {
        span.textContent = optionText;
      }
      div.appendChild(span);
    });

    document.body.appendChild(div);
  }

  return (
    <div
      {...rest}
      className={
        `reactivus-select-input-box` + " " + (className ? className : "")
      }
      style={{
        width: width
          ? width
          : higherLengthString
          ? higherLengthString * 9 + "px"
          : "50px",
      }}
    >
      {label && <label>{label}</label>}
      <div
        className={`reactivus-select-title-box`}
        ref={titleBoxRef}
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <div className="reactivus-select-title-label">{optionLabelState}</div>
        <span className="reactivus-select-title-icon-open">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </div>
    </div>
  );
}

{
  /* <div
        className={`reactivus-select-options-box reactivus-select-options-box-${
          showOptions ? "show" : "hide"
        }`}
        style={{
          top: inputProps.isClosestToTop ? inputProps.topDistance : undefined,
          bottom: inputProps.isClosestToTop
            ? undefined
            : inputProps.bottomDistance,
          left: inputProps.left,
          width: inputProps.width,
          flexDirection: inputProps.isClosestToTop
            ? "column"
            : "column-reverse",
          maxHeight: showOptions ? inputProps.maxHeight : 0,
        }}
      >
        {(filter || selectAll) && (
          <span
            className={`reactivus-select-item-box reactivus-select-filter-box`}
            style={{
              zIndex: 9999, // Set a high z-index value
            }}
          >
            {selectAll && (
              <input
                type={"checkbox"}
                id={"reactivusSelectAllCheckbox"}
                className={`reactivus-select-filter-box-checkbox`}
                onClick={() => {
                  if (selectionList.length == options.length) {
                    setSelectionList([]);
                  } else {
                    setSelectionList(options);
                  }
                }}
              />
            )}
            {!filter && (
              <span
                className={`reactivus-select-filter-box-label`}
                onClick={() => {
                  if (selectionList.length == options.length) {
                    setSelectionList([]);
                  } else {
                    setSelectionList(options);
                  }
                  const allCheck: any = document.getElementById(
                    "reactivusSelectAllCheckbox"
                  );
                  if (allCheck && allCheck.checked) {
                    allCheck.checked = false;
                  } else if (allCheck) {
                    allCheck.checked = true;
                  }
                }}
              >
                Todos
              </span>
            )}
            {filter && (
              <input
                type="text"
                className={`reactivus-select-filter-box-text`}
                placeholder={filterPlaceHolder ?? "Search"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleOptionsFilter(e.target.value)
                }
              />
            )}
            <span
              className="reactivus-select-title-icon-close"
              onClick={() => {
                setSelectionList([]);
                setShowOptions(!showOptions);
                const allCheck: any = document.getElementById(
                  "reactivusSelectAllCheckbox"
                );
                if (allCheck && allCheck.checked) {
                  allCheck.checked = false;
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-8 -8 48 48"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2,2 L30,30 M2,30 L30,2" />
              </svg>
            </span>
          </span>
        )}
        {optionsList?.map((option: any, index: any) => {
          return (
            <span
              className={`reactivus-select-item-box`}
              onClick={() => {
                if (multiSelect) {
                  setSelectionList((prev: any) => {
                    const isOptionInList = prev.some(
                      (p: any) => JSON.stringify(p) === JSON.stringify(option)
                    );

                    if (isOptionInList) {
                      return prev.filter(
                        (p: any) => JSON.stringify(p) !== JSON.stringify(option)
                      );
                    } else {
                      return [...prev, option];
                    }
                  });
                } else {
                  onChange && onChange({ value: option });
                  if (!value) {
                    value = option;
                    handleOptionLabelStateDefinition([option]);
                  }
                  setShowOptions(false);
                }
              }}
              key={index}
            >
              {multiSelect && (
                <input
                  type={"checkbox"}
                  checked={isChecked(option)}
                  onChange={() => {}}
                />
              )}
              {optionTemplate
                ? optionTemplate(option)
                : option[optionLabel] ?? option}
            </span>
          );
        })}
      </div> */
}

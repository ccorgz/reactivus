"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../../styles/inputs/select.css";
import ReactDOM from "react-dom/client";
import debounce from "../../../utils/debounce";
import VirtualizedList from "../../../utils/virtualizedList";

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
   * Array containing the default value to be displayed in the component.
   */
  defaultValue?: any;
  /**
   * Array with the options to be listed in the component.
   */
  options: Array<any>;
  /**
   * Name of the property to be displayed by default in the options list of the component.
   * This is optional if `options` is an array of strings.
   */
  optionLabel?: string;
  /**
   * Custom element to be rendered in the options list of the component.
   */
  optionTemplate?: HTMLElement | any;
  /**
   * Custom data label string that defines which field will be displayed at the selected fields.
   */
  selectedLabel?: string;
  /**
   * Boolean to control if a filter option must be rendered in the component.
   */
  filter?: boolean;
  /**
   * String to be displayed as a placeholder in the filter text of the component.
   */
  filterPlaceHolder?: string;
  /**
   * String containing the list of fields that the search logic must consider in the component.
   */
  filterBy?: string;
  /**
   * String to be displayed by default in the component.
   */
  placeholder?: string;
  /**
   * React state that determines if multiple options can be selected.
   */
  multiSelect?: boolean;
  /**
   * Insert a list with virtualization and pre-rendering. Works best when you expect to display many items.
   */
  virtualizedList?: boolean;
  /**
   * Function that returns the value of the component.
   */
  onChange?: (selectedOption: { value: any }) => void;
  /**
   * Defines a custom className object to be set as the input box styles.
   */
  className?: any;
} & ( // Make selectAll only available when multiSelect is true
  | {
      multiSelect: true;
      /**
       * Optional property that enables the selection of all options at once.
       * This property is only allowed if `multiSelect` is true.
       */
      selectAll?: boolean;
      /**
       * React state with value to be set to the component.
       */
      value: any;
    }
  | { multiSelect?: false; value?: any; selectAll?: never }
  | { multiSelect?: boolean; value: any }
) &
  (
    | { options: string[]; optionLabel?: never }
    | { options: Array<any>; optionLabel: string }
  );

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
  multiSelect = false,
  onChange,
  selectAll,
  className,
  virtualizedList,
  ...rest
}: SelectInputProps & Record<string, unknown>) {
  const [showOptions, setShowOptions] = useState(false);

  const [optionsList, setOptionsList] = useState<Array<any>>(options ?? []);

  const [optionLabelState, setOptionLabelState] = useState<string>(
    placeholder ?? ""
  );

  const [selectionList, setSelectionList] = useState<any>([]);

  const titleBoxRef = useRef<any>(null);

  optionLabel = !optionLabel ? "" : optionLabel ?? "";

  useEffect(() => {
    const handleResize = () => {
      setShowOptions(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (options == optionsList) {
      return;
    }

    setOptionsList(options ?? []);
  }, [titleBoxRef, value, options]);

  useEffect(() => {
    if (optionsList.length > 0 && typeof options[0] != "string") {
      let higgherValueString = 0;
      for (let i = 0; i < options.length; i++) {
        const option = options[i][optionLabel ?? ""];
        higgherValueString =
          option.length >= higgherValueString
            ? option.length
            : higgherValueString;
      }
    }
  }, [optionsList]);

  useEffect(() => {
    setSelectionList(typeof value == "string" ? [value] : value);
  }, [value]);

  useEffect(() => {
    if (
      defaultValue &&
      optionLabel != undefined &&
      defaultValue[optionLabel] &&
      !value
    ) {
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
          return selectedLabel
            ? v[selectedLabel]
            : optionLabel
            ? v[optionLabel]
            : "";
        })
        .join(", ");
    } else {
      valueToSet =
        values && values[0] && typeof values != "string"
          ? values.join(", ")
          : "";
    }
    valueToSet =
      valueToSet && valueToSet.slice(-2) == ", "
        ? valueToSet.slice(0, -2)
        : valueToSet;
    if (valueToSet == "" && !placeholder) {
      valueToSet = selectedLabel ? selectedLabel : optionLabel ?? "";
    } else if (valueToSet == "" && placeholder) {
      valueToSet = placeholder;
    }
    if (value && optionLabel != undefined && value[optionLabel]) {
      valueToSet = selectedLabel
        ? value[selectedLabel]
        : optionLabel
        ? value[optionLabel]
        : "";
    }
    setOptionLabelState(valueToSet);
  };

  const handleClickOutside = (event: any) => {
    if (
      titleBoxRef.current &&
      !titleBoxRef.current.contains(event.target) &&
      event.target.closest(".r-select-options-box") === null
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
      const element = document.querySelector(".r-select-options-box");
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
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;

    const adjustedY = titleBoxRect.y + scrollY;
    const adjustedX = titleBoxRect.x + scrollX;

    const { height, width, top, bottom, left, right } = titleBoxRect;
    const isClosestToTop = top < window.innerHeight - bottom;
    const maxHeight = isClosestToTop
      ? (window.innerHeight - adjustedY) / 2
      : adjustedY / 2;

    const inputProps = {
      x: adjustedX,
      y: adjustedY,
      height: height,
      width: width,
      top: top + scrollY,
      bottom: bottom + scrollY,
      isClosestToTop: isClosestToTop,
      topDistance: adjustedY + height + 15,
      bottomDistance: window.innerHeight - adjustedY - 7.5 + height / 2,
      maxHeight: maxHeight,
      left: left + scrollX,
      right: right + scrollX,
    };

    appendOptionsBoxToBody(inputProps);
  };

  const SelectOptionsBox = () => {
    const [optionsSelectionList, setOptionsSelectionList] = useState<any>(
      selectionList ? selectionList : []
    );
    const [optionsFilterList, setOptionsFilterList] = useState<any>(
      optionsList ?? []
    );

    useEffect(() => {
      const allCheck: any = document.getElementById(
        "reactivusSelectAllCheckbox"
      );
      if (optionsSelectionList.length == options.length && allCheck) {
        allCheck.checked = true;
      } else if (allCheck) {
        allCheck.checked = false;
      }
    }, [optionsSelectionList]);

    const handleAllOptionsSelection = () => {
      const allCheck: any = document.getElementById(
        "reactivusSelectAllCheckbox"
      );
      if (allCheck && !allCheck.checked) {
        setSelectionList([]);
        setOptionsSelectionList([]);
      } else if (allCheck && allCheck.checked) {
        setSelectionList(options);
        setOptionsSelectionList(options);
      }
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
        setOptionsFilterList(filteredList ?? []);
      } else {
        setOptionsFilterList(options ?? []);
      }
    };

    const debouncedSearch = debounce((value: string) => {
      handleOptionsFilter(value);
    }, 500);

    const Option: React.FC<any> = React.memo(({ option, key, style }) => {
      return (
        <span
          className={
            `r-select-item-box ` +
            (JSON.stringify(optionsSelectionList).includes(
              JSON.stringify(option)
            )
              ? "r-item-selected"
              : "")
          }
          style={style}
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
              setOptionsSelectionList((prev: any) => {
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
                setOptionsSelectionList(option);
                typeof option == "string" && setSelectionList([option]);
              }
              setShowOptions(false);
            }
          }}
          key={key}
        >
          {multiSelect && (
            <input
              className="r-select-item-box-checkbox"
              type={"checkbox"}
              checked={JSON.stringify(optionsSelectionList).includes(
                JSON.stringify(option)
              )}
            />
          )}
          {optionTemplate
            ? optionTemplate(option)
            : optionLabel
            ? option[optionLabel]
            : option}
        </span>
      );
    });

    return (
      <div style={{ overflowX: "hidden" }}>
        {(filter || selectAll) && (
          <span
            className={`r-select-item-box r-select-filter-box`}
            style={{
              zIndex: 9998,
            }}
          >
            {selectAll && (
              <input
                type={"checkbox"}
                id={"reactivusSelectAllCheckbox"}
                className={`r-select-filter-box-checkbox`}
                onClick={() => {
                  handleAllOptionsSelection();
                }}
              />
            )}
            {!filter && (
              <span
                className={`r-select-filter-box-label`}
                onClick={() => {
                  handleAllOptionsSelection();
                }}
              >
                Todos
              </span>
            )}
            {filter && (
              <input
                type="text"
                className={`r-select-filter-box-text`}
                placeholder={filterPlaceHolder ?? "Search"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  debouncedSearch(e.target.value)
                }
              />
            )}
            <span
              className="r-select-title-icon-close"
              onClick={() => {
                setSelectionList([]);
                setOptionsSelectionList([]);
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
        {!virtualizedList ? (
          optionsFilterList?.map((option: any, index: any) => {
            return (
              <span
                className={
                  `r-select-item-box ` +
                  (JSON.stringify(optionsSelectionList).includes(
                    JSON.stringify(option)
                  )
                    ? "r-item-selected"
                    : "")
                }
                onClick={() => {
                  if (multiSelect) {
                    setSelectionList((prev: any) => {
                      const isOptionInList = prev.some(
                        (p: any) => JSON.stringify(p) === JSON.stringify(option)
                      );

                      if (isOptionInList) {
                        return prev.filter(
                          (p: any) =>
                            JSON.stringify(p) !== JSON.stringify(option)
                        );
                      } else {
                        return [...prev, option];
                      }
                    });
                    setOptionsSelectionList((prev: any) => {
                      const isOptionInList = prev.some(
                        (p: any) => JSON.stringify(p) === JSON.stringify(option)
                      );

                      if (isOptionInList) {
                        return prev.filter(
                          (p: any) =>
                            JSON.stringify(p) !== JSON.stringify(option)
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
                      setOptionsSelectionList(option);
                      typeof option == "string" && setSelectionList([option]);
                    }
                    setShowOptions(false);
                  }
                }}
                key={index}
              >
                {multiSelect && (
                  <input
                    className="r-select-item-box-checkbox"
                    type={"checkbox"}
                    checked={JSON.stringify(optionsSelectionList).includes(
                      JSON.stringify(option)
                    )}
                  />
                )}
                {optionTemplate
                  ? optionTemplate(option)
                  : optionLabel
                  ? option[optionLabel]
                  : option}
              </span>
            );
          })
        ) : (
          <VirtualizedList
            height={170}
            itemCount={optionsFilterList.length}
            itemHeight={35}
            renderItem={(index) => (
              <Option option={optionsFilterList[index]} key={index} />
            )}
          />
        )}
      </div>
    );
  };

  function appendOptionsBoxToBody(inputProps: any) {
    let largerOption = 0;
    for (let i = 0; i < optionsList.length; i++) {
      if (optionLabel) {
        if (optionsList[i][optionLabel].toString().length > largerOption) {
          largerOption = optionsList[i][optionLabel].toString().length;
        }
      } else {
        if (optionsList[i].length > largerOption) {
          largerOption = optionsList[i].length;
        }
      }
    }
    const div = document.createElement("div");
    div.className = `r-select-options-box r-box-shadow r-select-options-box-${
      showOptions ? "show" : "hide"
    } r-select-options-box-${virtualizedList ? 'not-scroll' : 'scroll'}`;
    div.style.top = inputProps.isClosestToTop
      ? inputProps.topDistance - 10 + "px"
      : "";
    div.style.bottom = inputProps.isClosestToTop
      ? ""
      : inputProps.bottomDistance - 8 + "px";
    div.style.left = inputProps.left + "px";
    div.style.width = largerOption * 9.5 + 15 + "px";
    (div.style.minWidth = width
      ? width
      : label
      ? label.length * 9 + 15 + "px"
      : "50px"),
      (div.style.flexDirection = inputProps.isClosestToTop
        ? "column"
        : "column-reverse");
    div.style.maxHeight = showOptions ? inputProps.maxHeight + "px" : "0";

    document.body.appendChild(div);

    const root = (ReactDOM as any).createRoot(div);
    root.render(<SelectOptionsBox />);
  }

  return (
    <div
      {...rest}
      className={`r-select-input-box ` + " " + (className ? className : "")}
    >
      {label && <label className="r-select-input-box-label">{label}</label>}
      <div
        className={`r-select-title-box r-box-shadow`}
        ref={titleBoxRef}
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        style={{
          width: width ? width : "auto",
          minWidth: width
            ? width
            : label
            ? label.length * 9 + 15 + "px"
            : "50px",
        }}
      >
        <div className="r-select-title-label">{optionLabelState}</div>
        <span className="r-select-title-icon-open">
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

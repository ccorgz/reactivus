// IMPORTA HOOKS DO REACT
import React, { useEffect, useRef, useState } from "react";

// IMPORTA FOLHA DE ESTILOS DO COMPONENTE
import "../../../styles/inputs/select.css";

type SelectInputProps = {
  icon?: any;
  label?: string;
  floatLabel?: string;
  width?: string;
  ref?: React.Ref<any>;
  value: any;
  options: Array<any>;
  optionLabel: string;
  optionTemplate?: HTMLElement | any;
  filter?: boolean;
  filterPlaceHolder?: string;
  filterBy?: string;
  placeholder?: string;
  onKeyDown?: any;
  multiSelect?: boolean;
  selectAll?: boolean;
  onChange: (selectedOption: any) => void;
};

// EXPORTA COMPONENTE POR PADRÃO
export default function Select({
  icon,
  label,
  width,
  ref,
  value,
  options,
  optionLabel,
  optionTemplate,
  filter,
  filterPlaceHolder,
  filterBy,
  placeholder,
  onKeyDown,
  multiSelect,
  onChange,
  selectAll,
  ...rest
}: SelectInputProps & Record<string, unknown>) {
  const [showOptions, setShowOptions] = useState(false);

  const [optionsList, setOptionsList] = useState<Array<any>>(options ?? []);

  const [optionLabelState, setOptionLabelState] = useState<string>(
    placeholder ?? ""
  );

  const [selectionList, setSelectionList] = useState<any>([]);

  const [isClosestToTop, setIsClosestToTop] = useState<boolean>(true);

  const titleBoxRef = useRef<any>(null);

  useEffect(() => {
    if (options == optionsList) {
      return;
    }

    setOptionsList(options ?? []);

    const handleScroll = () => {
      if (titleBoxRef.current) {
        const rect = titleBoxRef.current.getBoundingClientRect();
        setIsClosestToTop(rect.top < window.innerHeight - rect.bottom);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [titleBoxRef, value, options]);

  useEffect(() => {
    setSelectionList(value);
  }, [value]);

  useEffect(() => {
    handleOptionLabelStateDefinition(selectionList);
  }, [selectionList]);

  const handleOptionLabelStateDefinition = (values: any) => {
    let valueToSet = "";
    if (multiSelect) {
      valueToSet = values
        ?.map((v: any) => {
          return v[optionLabel] ?? "";
        })
        .join(", ");
    } else {
      valueToSet = values[0] ? values.join(", ") : "";
    }
    valueToSet =
      valueToSet.slice(-2) == ", " ? valueToSet.slice(0, -2) : valueToSet;
    if (valueToSet == "" && !placeholder) {
      valueToSet = optionLabel;
    } else if (valueToSet == "" && placeholder) {
      valueToSet = placeholder;
    }
    if (value && value[optionLabel]) {
      valueToSet = value[optionLabel];
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

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [titleBoxRef, showOptions]);

  const handleOptionsFilter = (filterText: string) => {
    if (filterText != "" && filterBy) {
      const newFilter: any = options?.filter((op: any) =>
        op[filterBy].toString().toUpperCase().includes(filterText.toUpperCase())
      );
      setOptionsList(newFilter);
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

  return (
    <div
      {...rest}
      className={`reactivus-select-input-box`}
      style={{ width: width }}
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
      <div
        className={`reactivus-select-options-box reactivus-select-options-box-${
          showOptions ? "show" : "hide"
        } reactivus-select-options-box-${isClosestToTop ? "bottom" : "top"}`}
        ref={ref ?? null}
      >
        {filter ||
          (selectAll && (
            <span
              className={`reactivus-select-item-box reactivus-select-filter-box`}
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
          ))}
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
                  console.log("MULTIPLE OFF");
                  onChange && onChange({ value: option });
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
      </div>
    </div>
  );
}

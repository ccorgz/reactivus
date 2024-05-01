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
  defaultOptionLabel?: string;
  optionTemplate?: HTMLElement | any;
  filter?: boolean;
  filterPlaceHolder?: string;
  filterBy?: string;
  placeholder?: string;
  onKeyDown?: any;
  multiSelect?: boolean;
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
  defaultOptionLabel,
  optionTemplate,
  filter,
  filterPlaceHolder,
  filterBy,
  placeholder,
  onKeyDown,
  multiSelect,
  onChange,
  ...rest
}: SelectInputProps & Record<string, unknown>) {
  const [showOptions, setShowOptions] = useState(false);
  console.log("RENDERED");

  const [optionsList, setOptionsList] = useState<Array<any>>(options ?? []);

  const [optionLabelState, setOptionLabelState] = useState<string>(
    defaultOptionLabel ?? ""
  );

  const [isClosestToTop, setIsClosestToTop] = useState<boolean>(true);

  const titleBoxRef = useRef<any>(null);

  useEffect(() => {
    const valueOptionLabel: any = optionsList?.filter(
      (op: any) => value && op[optionLabel] == value[optionLabel]
    );

    if (value && value[optionLabel]) {
      setOptionLabelState(value[optionLabel]);
    } else if (
      valueOptionLabel.length > 0 &&
      valueOptionLabel[0][optionLabel]
    ) {
      setOptionLabelState(valueOptionLabel[0][optionLabel]);
    }
  }, [value]);

  useEffect(() => {
    if (options == optionsList) {
      return;
    }

    setOptionsList(options ?? []);

    const valueOptionLabel: any = optionsList?.filter(
      (op: any) => value && op[optionLabel] == value[optionLabel]
    );
    if (valueOptionLabel.length > 0 && valueOptionLabel[0][optionLabel]) {
      setOptionLabelState(valueOptionLabel[0][optionLabel]);
    }

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
        op[filterBy].toUpperCase().includes(filterText.toUpperCase())
      );
      setOptionsList(newFilter);
    } else {
      setOptionsList(options ?? []);
    }
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
        <span className="reactivus-select-title-label">{optionLabelState}</span>
        <span className="reactivus-select-title-icon-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
        {filter && (
          <span
            className={`reactivus-select-item-box reactivus-select-filter-box`}
          >
            <input
              type="text"
              placeholder={filterPlaceHolder ?? "Search"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOptionsFilter(e.target.value)
              }
            />
          </span>
        )}
        {optionsList?.map((option: any, index: any) => {
          return (
            <span
              className={`reactivus-select-item-box`}
              onClick={() => {
                if (!multiSelect) {
                  setShowOptions(false);
                }
                onChange && onChange({ value: option });
              }}
              key={index}
            >
              {multiSelect && <input type={"checkbox"} />}
              {optionTemplate ? optionTemplate(option) : option[optionLabel]}
            </span>
          );
        })}
      </div>
    </div>
  );
}

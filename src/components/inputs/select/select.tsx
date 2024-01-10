// IMPORTA HOOKS DO REACT
import React, { useEffect, useRef, useState } from "react";

// IMPORTA FOLHA DE ESTILOS DO COMPONENTE
import "../../../styles/inputs/select.css";

type SelectInputProps = {
  icon?: any;
  label?: string;
  width?: string;
  ref?: React.Ref<any>;
  value: any;
  options: Array<any>;
  optionLabel: string;
  defaultOptionLabel?: string;
  filter?: boolean;
  filterPlaceHolder?: string;
  filterBy?: string;
  placeholder?: string;
  onKeyDown?: any;
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
  filter,
  filterPlaceHolder,
  filterBy,
  placeholder,
  onKeyDown,
  onChange,
  ...rest
}: SelectInputProps & Record<string, unknown>) {
  const [showOptions, setShowOptions] = useState(false);

  const [optionsList, setOptionsList] = useState<Array<any>>(options ?? []);

  const [optionLabelState, setOptionLabelState] = useState<string>(
    defaultOptionLabel ?? ""
  );

  const [isClosestToTop, setIsClosestToTop] = useState<boolean>(true);

  const titleBoxRef = useRef<any>(null);

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

    const handleClickOutside = (event: any) => {
      if (
        titleBoxRef.current
        && !titleBoxRef.current.contains(event.target)
        && event.target.closest(".reactivus-select-options-box") === null
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [titleBoxRef, value, options]);

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
        onClick={() => {setShowOptions(!showOptions);}}
      >
        {optionLabelState}
        <span className="reactivus-select-title-icon-close">
          <svg width="18" height="18">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
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
                setShowOptions(false);
                onChange && onChange({ value: option });
              }}
              key={index}
            >
              {option[optionLabel]}
            </span>
          );
        })}
      </div>
    </div>
  );
}

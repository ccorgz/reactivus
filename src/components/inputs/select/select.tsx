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
  filterBy?: string;
  placeholder?: string;
  onKeyDown?: any;
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
  filterBy,
  placeholder,
  onKeyDown,
  ...rest
}: SelectInputProps & Record<string, unknown>) {
  const [showOptions, setShowOptions] = useState(false);

  const titleBoxRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        titleBoxRef.current &&
        !titleBoxRef.current.contains(event.target) &&
        event.target.closest(".reactivus-select-options-box") === null
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [titleBoxRef]);

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
        onClick={() => setShowOptions(!showOptions)}
      >
        {defaultOptionLabel}
        <span className="reactivus-select-title-icon-close">
          <svg width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </span>
      </div>
      <div
        className={`reactivus-select-options-box reactivus-select-options-box-${
          showOptions ? "show" : "hide"
        }`}
        ref={ref ?? null}
      >
        {options?.map((options: any) => {
          return (
            <span className={`reactivus-select-item-box`}>
              {options[optionLabel]}
            </span>
          );
        })}
      </div>
    </div>
  );
}

"use client";

// IMPORTA HOOKS DO REACT
import React, { useEffect, useState } from "react";

// IMPORTA FOLHA DE ESTILOS DO COMPONENTE
import "../../styles/input.css";

interface IInput {
  options: {
    type: "text" | "password" | "date" | "number" | "select";
    icon?: any;
    label?: string;
    width?: string;
    ref?: React.Ref<any>;
    placeholder?: string;
    password?: {
      seePwd?: boolean;
      onIcon?: any;
      offIcon?: any;
    };
    status?: "danger" | "success";
    onKeyDown?: any;
  };
  children?: React.ReactNode;
}

// EXPORTA COMPONENTE POR PADRÃO
export default function Input({
  options,
  children,
  onKeyDown,
  ...rest
}: IInput & Record<string, unknown>) {
  // DEFINE STATE PARA CONTROLE DA EXIBIÇÃO DO ÍCONE DE VISUALIZAÇÃO DA SENHA
  const [seePwd, setSeePwd] = useState(false);

  // DEFINE STATE DE CONTROLE DO TIPO DO INPUT
  const [type, setType] = useState(options.type);

  // USEEFFECT DE CONTROLE DA EXIBIÇÃO DA SENHA DO COMPONENTE
  useEffect(() => {
    if (seePwd) {
      setType("text");
    } else if (type !== options.type) {
      setType(options.type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seePwd]);

  if (options.type === "select") {
    return (
      <div
        {...rest}
        className={`reactivus-inputBox reactivus-${options.status ?? "light"}`}
        style={{ width: options.width }}
      >
        {options.label && <label>{options.label}</label>}
        <select className={`reactivus-selectInputBox`} ref={options.ref ?? null}>
          {children}
        </select>
      </div>
    );
  } else {
    return (
      <div
        {...rest}
        className={`reactivus-inputBox reactivus-${options.status ?? "light"}`}
        style={{ width: options.width }}
      >
        {options.label && <label>{options.label}</label>}
        {options.icon && <span>{options.icon}</span>}
        <input
          type={type}
          placeholder={options?.placeholder}
          {...rest}
          ref={options.ref ?? null}
          onChange={(e: any) => e.preventDefault()}
          onKeyDown={options.onKeyDown}
        />
        {options.password?.seePwd && (
          <span
            onClick={(e) => setSeePwd(!seePwd)}
            style={{ cursor: "pointer" }}
          >
            {seePwd ? options.password?.onIcon : options.password?.offIcon}{" "}
          </span>
        )}
      </div>
    );
  }
}

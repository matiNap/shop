import React from "react";

interface Props {
  label: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  value: string;
  type?: string;
  name: string;
}

export default ({
  label,
  onChangeText,
  placeholder,
  value,
  type,
  name,
}: Props) => {
  return (
    <div className="auth-input-container">
      <label className="auth-input-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        className="auth-input"
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.currentTarget.value)}
      />
    </div>
  );
};

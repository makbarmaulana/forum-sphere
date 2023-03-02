import React from 'react';
import styled from 'styled-components';

export function LabeledInput({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  `;

export const Label = styled.label`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  padding: 6px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;

  :focus-visible {
    border: 1px solid currentColor;
    outline: unset;
  }
`;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './TextInput.module.css';

interface Props {
  onChange: (value: string) => void;
  label: string;
  value?: string;
  required?: boolean;
  list?: string;
  id?: string;
  name?: string;
  onBlur?: () => void;
  disabled?: boolean;
}

function TextInput({
  onChange,
  required = false,
  label,
  value = '',
  list,
  id,
  name,
  disabled,
  onBlur,
}: Props) {
  return (
    <div className={styles.group}>
      <input
        type="text"
        required={required}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
          onChange(ev.target.value)
        }
        value={value}
        list={list}
        id={id}
        name={name}
        onBlur={onBlur}
        disabled={disabled}
      />
      <span className={styles.bar} />
      <label>{label}</label>
    </div>
  );
}

TextInput.defaultProps = {
  value: undefined,
  required: false,
  list: undefined,
  id: undefined,
  name: undefined,
  onBlur: () => {},
  disabled: false,
};

export default TextInput;

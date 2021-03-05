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
}

function TextInput({
  onChange,
  required = false,
  label,
  value = '',
  list,
  id,
  name,
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
};

export default TextInput;

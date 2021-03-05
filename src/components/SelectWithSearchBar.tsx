/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';
import createId from '../utils/createId';

interface Props {
  placeholder: string;
  onSelectIndex: (value: number) => void;
  value?: string;
  data: string[];
}
const idSelect = createId();

const SelectWithSearchBar = ({
  placeholder,
  onSelectIndex,
  value: valueProps,
  data,
}: Props) => {
  const [search, setSearch] = useState(valueProps);

  useEffect(() => {
    if (valueProps) {
      setSearch(valueProps);
    }
  }, [valueProps]);

  function handleChange(valueEditing: string): void {
    setSearch(valueEditing);
    const indexFind = data.findIndex((tryValue) => valueEditing === tryValue);
    if (indexFind !== -1) {
      onSelectIndex(indexFind);
    }
  }

  return (
    <div>
      <TextInput
        label={placeholder}
        list={idSelect}
        onChange={(value: string) => {
          handleChange(value);
        }}
        value={search}
      />
      <datalist id={idSelect}>
        {data.map((oneValue, index) => (
          <option value={oneValue} key={index} />
        ))}
      </datalist>
    </div>
  );
};

SelectWithSearchBar.defaultProps = {
  value: '',
};

export default SelectWithSearchBar;

import React, { LabelHTMLAttributes } from 'react';
import { FormLabel } from 'components';

interface IFormControlProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string | number;
  input: React.ReactNode;
}

function FormControl({ label, input }: IFormControlProps) {
  return (
    <>
      <FormLabel label={label} />
      {input}
    </>
  );
}

export default FormControl;

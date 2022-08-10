import React, { LabelHTMLAttributes } from 'react';
import { FormLabel, FlexWrapper } from 'components';

interface IFormControlProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string | number;
  input: React.ReactNode;
}

function FormControl({ label, input }: IFormControlProps) {
  return (
    <FlexWrapper align="center" gap="1rem">
      <FormLabel label={label} />
      {input}
    </FlexWrapper>
  );
}

export default FormControl;

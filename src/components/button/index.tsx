import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

function Button({ label, onClick, className, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
Button.defaultProps = {
  disabled: false,
  className: '',
};

export default Button;

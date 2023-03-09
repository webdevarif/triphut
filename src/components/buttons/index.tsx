import React from 'react';
import { Button } from 'flowbite-react';
import { ChevronRight } from 'react-feather';
type type =
  | 'btn--primary'
  | 'btn--light'
  | 'btn--line'
  | 'btn--default'
  | 'btn--line-dark'
  | 'btn--secondary'
  | 'btn--line-secondary '
  | 'btn--accent'
  | 'btn--line-accent';
type size = 'btn--sm' | 'btn--md' | 'btn--lg';
type width = 'btn--full';
interface ButtonsProps {
  type?: type;
  icon?: boolean;
  text?: string;
  link?: string;
  size?: size;
  width?: width;
}

function Buttons({ type, icon, text, link, size, width }: ButtonsProps) {
  const classes = Object.entries({ type, size, width })
    .filter(([value]) => value)
    .map(([key, value]) => value)
    .join(' ');
  return (
    <Button href={link ? link : '#'} className={'btn ' + classes}>
      <span>{text}</span>
      {icon && (
        <span>
          <ChevronRight />
        </span>
      )}
    </Button>
  );
}

export default Buttons;

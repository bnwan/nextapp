import * as React from 'react';

export interface IHeaderProps {
  title: string;
}

export const Header = (props: IHeaderProps) => {
  return (
    <h3>{props.title}</h3>
  );
}

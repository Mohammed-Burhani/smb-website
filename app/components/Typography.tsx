import { CSSProperties, ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function H1({ children, className = '', style }: TypographyProps) {
  return <h1 className={className} style={style}>{children}</h1>;
}

export function H2({ children, className = '', style }: TypographyProps) {
  return <h2 className={className} style={style}>{children}</h2>;
}

export function H3({ children, className = '', style }: TypographyProps) {
  return <h3 className={className} style={style}>{children}</h3>;
}

export function H4({ children, className = '', style }: TypographyProps) {
  return <h4 className={className} style={style}>{children}</h4>;
}

export function H5({ children, className = '', style }: TypographyProps) {
  return <h5 className={className} style={style}>{children}</h5>;
}

export function H6({ children, className = '', style }: TypographyProps) {
  return <h6 className={className} style={style}>{children}</h6>;
}

export function Body({ children, className = '', style }: TypographyProps) {
  return <p className={`font-medium! ${className}`} style={style}>{children}</p>;
}

export function BodyLarge({ children, className = '', style }: TypographyProps) {
  return <p className={`text-lg lg:text-xl ${className}`} style={style}>{children}</p>;
}

export function BodySmall({ children, className = '', style }: TypographyProps) {
  return <p className={`text-sm ${className}`} style={style}>{children}</p>;
}

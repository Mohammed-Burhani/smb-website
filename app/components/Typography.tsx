import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className = '' }: TypographyProps) {
  return <h1 className={className}>{children}</h1>;
}

export function H2({ children, className = '' }: TypographyProps) {
  return <h2 className={className}>{children}</h2>;
}

export function H3({ children, className = '' }: TypographyProps) {
  return <h3 className={className}>{children}</h3>;
}

export function H4({ children, className = '' }: TypographyProps) {
  return <h4 className={className}>{children}</h4>;
}

export function H5({ children, className = '' }: TypographyProps) {
  return <h5 className={className}>{children}</h5>;
}

export function H6({ children, className = '' }: TypographyProps) {
  return <h6 className={className}>{children}</h6>;
}

export function Body({ children, className = '' }: TypographyProps) {
  return <p className={`font-medium! ${className}`}>{children}</p>;
}

export function BodyLarge({ children, className = '' }: TypographyProps) {
  return <p className={`text-lg lg:text-xl ${className}`}>{children}</p>;
}

export function BodySmall({ children, className = '' }: TypographyProps) {
  return <p className={`text-sm ${className}`}>{children}</p>;
}

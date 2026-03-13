export const typography = {
  // Headings
  h1: 'text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight',
  h2: 'text-3xl lg:text-4xl font-bold',
  h3: 'text-2xl lg:text-3xl font-bold',
  h4: 'text-xl lg:text-2xl font-bold',
  h5: 'text-lg lg:text-xl font-bold',
  h6: 'text-base lg:text-lg font-bold',
  
  // Body text
  body: 'text-base leading-relaxed font-normal!',
  bodyLarge: 'text-lg lg:text-xl leading-relaxed',
  bodySmall: 'text-sm leading-relaxed',
  
  // Special
  outlinedTitle: 'text-5xl lg:text-6xl font-bold uppercase tracking-wide',
  subtitle: 'text-3xl lg:text-4xl font-bold uppercase',
  
  // Buttons
  button: 'text-base font-semibold',
  buttonSmall: 'text-sm font-semibold',
} as const;

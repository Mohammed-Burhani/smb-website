interface SectionTitleProps {
  outlinedText: string;
  solidText?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ outlinedText, solidText, align = 'center' }: SectionTitleProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <div className={alignmentClass}>
      <h2 
        className="text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-2"
        style={{
          WebkitTextStroke: '1px #2E3887',
          color: 'transparent'
        }}
      >
        {outlinedText}
      </h2>
      <h3 className="text-3xl lg:text-4xl font-bold uppercase" style={{ color: '#151C50' }}>
        {solidText}
      </h3>
    </div>
  );
}

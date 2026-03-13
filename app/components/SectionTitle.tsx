import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

interface SectionTitleProps {
  outlinedText: string;
  solidText: string;
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
        className={`${typography.outlinedTitle} mb-2`}
        style={{
          WebkitTextStroke: `1px ${colors.secondary}`,
          color: 'transparent'
        }}
      >
        {outlinedText}
      </h2>
      <h3 className={`${typography.subtitle}`} style={{ color: colors.primary }}>
        {solidText}
      </h3>
    </div>
  );
}

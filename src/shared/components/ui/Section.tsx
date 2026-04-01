interface SectionProps {
  children: React.ReactNode;
  paddingY?: number;
  bgColor?: string;
  className?: string;
}

export const Section = ({
  children,
  paddingY = 20,
  bgColor = 'bg-gray-900',
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      className={`${bgColor} py-${paddingY} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
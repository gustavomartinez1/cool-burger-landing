interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: number;
}

export const Container = ({
  children,
  maxWidth = 'xl',
  padding = 6,
  ...props
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
  };
  
  const paddingClasses = `px-${padding}`;
  
  return (
    <div
      className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses} sm:px-6 lg:px-8`}
      {...props}
    >
      {children}
    </div>
  );
};
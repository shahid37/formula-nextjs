export const AppMainLayout = ({ children, className }: any) => (
  <div className={`max-w-[1512px] w-[84%] mx-auto ${className ?? ""}`}>
    {children}
  </div>
);

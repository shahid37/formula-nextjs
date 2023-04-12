export const AppMainLayout = ({ children, className }: any) => (
  <div
    className={`max-w-[1512px] xs:w-[92%] md:w-[84%] mx-auto ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

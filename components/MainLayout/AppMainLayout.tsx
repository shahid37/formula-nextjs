export const AppMainLayout = ({ children, className }: any) => (
  <div
    className={`xs:max-w-[390px] md:max-w-[1512px] xs:w-[92%] md:w-[84%] mx-auto ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

const commonStyle = {
  width: 20,
  height: 20,
};

const grayColor = "#4E4B48";
const tealColor = "#A0D1CA";
const offWhiteColor = "#FDF9F4";

export const styles = {
  track: {
    background: grayColor,
  },
  rail: {
    background: tealColor,
  },
  handle: {
    ...commonStyle,
    marginTop: -9,
    background: offWhiteColor,
    border: `2px solid ${grayColor}`,
  },
  dot: {
    ...commonStyle,
    marginBottom: -5,
    background: tealColor,
    border: `2px solid ${tealColor}`,
  },
  activeDot: {
    ...commonStyle,
    background: grayColor,
    border: `2px solid ${grayColor}`,
  },
};

export const shortAddress = (address) => {
    if (!address) {
      return 'N/A'; // or any default value you prefer
    }
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
  };
  
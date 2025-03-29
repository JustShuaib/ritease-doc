const truncateName = (name: string) => {
  if (name.length > 60) {
    return name.substring(0, 60) + "...";
  }
  return name;
};

export default truncateName;

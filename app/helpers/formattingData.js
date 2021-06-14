export const formattingData = objectToFormat => {
  const formattedData = Object.keys(objectToFormat).map(function(name) {
    const obj = {};
    obj[name] = objectToFormat[name];
    return obj;
  });
  return formattedData;
};

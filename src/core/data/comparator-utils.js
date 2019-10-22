export const attributeMatches = (attribute, search) => {
  return attribute && attribute.toLowerCase().indexOf(search) > -1;
};

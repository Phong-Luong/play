import capitalize from "capitalize";


const prettyType = prop => {
  const propName = prop.flowType ? prop.flowType.name : prop.type.name;
  const isEnum = propName.startsWith('"');
  const name = capitalize(isEnum ? "enum" : propName);

  if (!name) return null;
  return name;
};

const allPropTypes = () =>
  Object.keys(window.ALL_PROP_TYPES).reduce(
    (out, key) => ({
      ...out,
      [window.ALL_PROP_TYPES[key].name]: window.ALL_PROP_TYPES[key].docgenInfo
    }),
    {}
  );

const getPropsDefinition = name => {
  const propsDefintion = Object.values(window.ALL_PROP_TYPES).find(
    value => value.name === name
  );

  console.log(propsDefintion);

  if (!propsDefintion || !propsDefintion.docgenInfo) return null;
  return Object.entries(propsDefintion.docgenInfo.props).reduce(
    (out, [key, prop]) => ({
      ...out,
      [key]: {
        ...prop,
        prettyType: prettyType(prop)
      }
    }),
    {}
  );
};
export default ({ children, of }) => {
  return children({ propsDefinition: getPropsDefinition(of) });
};

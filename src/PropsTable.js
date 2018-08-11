import React from "react";
import styled from "react-emotion";
import capitalize from "capitalize";
import { PlayConsumer } from "./PlayContext";

import { table as Table } from "./components";

const extractComponentName = name =>
  name.replace(/\)/g, "").substr(name.lastIndexOf("(") + 1, name.length);

const allPropTypes = Object.keys(window.ALL_PROP_TYPES).reduce(
  (out, key) => ({
    ...out,
    [window.ALL_PROP_TYPES[key].name]: window.ALL_PROP_TYPES[key].docgenInfo
  }),
  {}
);

const getPropType = prop => {
  const propName = prop.flowType ? prop.flowType.name : prop.type.name;
  const isEnum = propName.startsWith('"');
  const name = capitalize(isEnum ? "enum" : propName);

  if (!name) return null;
  return name;
};

const PropsTable = ({ of }) => (
  <PlayConsumer>
    {({ options: { showPropsTable } }) => {
      if (!showPropsTable) return null;
      const name = of;
      // typeof of === "string"
      //   ? of
      //   : extractComponentName(of.displayName || of.name);
      const props = allPropTypes[name].props;

      if (!props) {
        return null;
      }

      return (
        <>
          <Table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default</th>
                <th width="40%">Description</th>
              </tr>
            </thead>
            <tbody>
              {props &&
                Object.keys(props).map(name => {
                  const prop = props[name];

                  if (!prop.flowType && !prop.type) return null;
                  return (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{getPropType(prop)}</td>
                      <td>{String(prop.required)}</td>
                      <td>
                        {prop.defaultValue &&
                          prop.defaultValue.value.replace(/\'/g, "")}
                      </td>
                      <td>{prop.description && prop.description}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </>
      );
    }}
  </PlayConsumer>
);

export default PropsTable;

import React from "react";

import PropsDefinition from "./PropsDefinition";
import { PlayConsumer } from "./PlayContext";

const PropsTable = ({ of }) => (
  <PlayConsumer>
    {({ md }) => (
      <PropsDefinition of={of}>
        {({ propsDefinition }) => (
          <md.table>
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
              {propsDefinition &&
                Object.keys(propsDefinition).map(name => {
                  const prop = propsDefinition[name];
                  if (!prop.prettyType) return null;
                  return (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{prop.prettyType}</td>
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
          </md.table>
        )}
      </PropsDefinition>
    )}
  </PlayConsumer>
);

export default PropsTable;

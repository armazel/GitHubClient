import * as React from "react";

import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { DatePicker } from 'antd';
import '../styles/index.less'

export const SchemaView = () => {

    const string = "({NDA}>=0 and {NDA}<=4)";
    const [userInfo, infoSet] = React.useState("nothing");

    const Form = withTheme(AntDTheme);

    const schema = {
        title: "My Form",
        description: "outhers info",
        type: "object",
        required: ["name"],
        properties: {
            name: {
                type: "string",
                default: "user",
            },
            age: {
                type: "number",
            }
        }
    };

    const uiSchema = {
      "ui:order": ["name", "age"]
    };
    const onSubmit = (form) => {
    const { formData: { name, age} } = form;
    infoSet(`His name is ${name} and it's ${age} years`)
    }
      return (
        <div>
            <Form 
                uiSchema={uiSchema}
                schema={schema}
                onSubmit={onSubmit}
            />
            <br/>
            <strong>{userInfo}</strong>
            <DatePicker />
        </div>
      )
  }

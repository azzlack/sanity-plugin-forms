export type FormsFieldValue = {
  title: string;
  description: string;
}

export type FormEditorValue = {
  _type: "object";
  data: Array<FormsField>
}

export type FormsField = {
  _id: string;
  _type: string;
  label: string;
  isRequired?: boolean;
  defaultValue?: any;
}

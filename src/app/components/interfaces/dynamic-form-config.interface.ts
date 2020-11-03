import {ControlTypeEnum} from './control-type.enum';

export interface DynamicFormConfig {
  id?: string;
  dataProvider?: { id: any, label: string }[];
  dependentControllers?: { controlId: string; table: string; column: string }[];
  label: string;
  placeholder?: string;
  type: ControlTypeEnum;
  help?: string;
  width: string;
  offset: string;
  defaultValue?: any;
  min?: any;
  minErrorMessage?: string;
  max?: any;
  maxErrorMessage?: string;
  pattern?: string;
  patternErrorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  requiredErrorMessage?: string;
  emailErrorMessage?: string;
  idField?: string;
  labelFiled?: string;
  accept?: string;
  groupName?: string;
  multiple?: boolean;
}

/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface TProps extends IFormConfig {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
}

const CForm = ({ children, onSubmit, defaultValues, resolver }: TProps) => {
  const formConfig: IFormConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const { handleSubmit, reset } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default CForm;

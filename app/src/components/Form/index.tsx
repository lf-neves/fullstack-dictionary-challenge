import { useCallback } from "react";
import {
  FieldValues,
  FormProvider,
  useForm as useNativeForm,
} from "react-hook-form";

export function useForm<FormValues extends FieldValues>() {
  const formMethods = useNativeForm<FormValues>();
  const Form = useCallback(
    ({
      children,
      onSubmit,
    }: {
      children: React.ReactNode;
      onSubmit: (values: FormValues) => void;
    }) => {
      return (
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
      );
    },
    [formMethods]
  );

  return { ...formMethods, Form };
}

import { Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import addTodos from "../../API/postState";
import {
  StyledForm,
  StyledErrorMessage,
  StyledField,
  StyledButton,
} from "./styledForm";

export interface IFormProps {
  title: string;
}

interface FormProps {
  handleClick: () => void;
}

const FormComponent: React.FunctionComponent<FormProps> = ({ handleClick }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please enter a valid todo."),
  });

  const initialValues: IFormProps = { title: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        addTodos(values);
        actions.resetForm();
      }}
    >
      {() => (
        <StyledForm>
          <StyledField type="title" name="title" placeholder="Add a task..." />
          <StyledErrorMessage name="title" component="div" />
          <StyledButton onClick={handleClick} type="submit">
            Add Task
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default FormComponent;

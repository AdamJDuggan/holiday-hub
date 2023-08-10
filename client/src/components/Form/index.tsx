import * as yup from "yup";
import useForm from "../../hooks/useForm";
import Field from "../Field";

const schema = yup
  .object({
    firstName: yup.string().required("ENTER A NAME"),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function Form() {
  const onSubmit = (data: FormData) =>
    setTimeout(() => console.log(data), 2000);

  const form = useForm({ schema, onSubmit });

  return (
    <form onSubmit={form.onSubmit}>
      <Field form={form} name="firstName" label="First name" className="mb-4" />
      <Field form={form} name="age" label="Age" className="mb-4" />
      <input type="submit" />
    </form>
  );
}

import { useForm as _useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function useForm({ schema, onSubmit }) {
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = _useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const _onSubmit = handleSubmit(onSubmit);

  return { register, onSubmit: _onSubmit, errors };
}

export default useForm;

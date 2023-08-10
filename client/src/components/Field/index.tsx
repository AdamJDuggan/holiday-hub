// 3rd party
import classnames from "classnames";

interface Props {
  form: any;
  name: string;
  label: string;
  className: string;
}

export default function Field(props: Props) {
  const { form, name, label, className } = props;

  const classes = classnames(className, "space-y-1");

  return (
    <div className={classes}>
      <label className="block text-sm text-gray-700 font-bold">{label}</label>
      <input
        {...form.register(name)}
        className={classnames(
          "p-2 border rounded focus-border-primary outline-none",
          form.errors[name] && "border-red-500"
        )}
      />
      <p className="text-xs text-red-500 ml-1 min-h-[16px]">
        {form.errors[name]?.message.toString()}
      </p>
    </div>
  );
}

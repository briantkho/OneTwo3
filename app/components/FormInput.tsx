export type FormProps = {
  label: string;
  input: string;
};

export const FormInput = (props: any) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div>
      <label className="font-thin dark:text-white-bg text-lg">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        className="focus:outline-none w-full"
        style={{ background: 'none' }}
      />
    </div>
  );
};

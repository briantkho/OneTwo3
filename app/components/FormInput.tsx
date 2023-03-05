export type FormProps = {
  label: string;
  input: string;
};

export const FormInput = (props: any) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div>
      <label className="font-thin dark:text-white-bg">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        className="focus:outline-none border-b-[1px] border-black"
        style={{ background: 'none' }}
      />
    </div>
  );
};

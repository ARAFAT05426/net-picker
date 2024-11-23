type ReusableFieldProps = {
  name: string;
  value: string | File | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => void;
  placeholder: string;
  type: "text" | "textarea" | "file";  // Include file type
};

const ReusableField: React.FC<ReusableFieldProps> = ({ name, value, onChange, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm font-semibold">{placeholder}</label>
      {type === "file" ? (
        <input
          type="file"
          id={name}
          name={name}
          onChange={onChange}
          className="p-2 border rounded outline-none"
        />
      ) : type === "textarea" ? (
        <textarea
          id={name}
          rows={3.5}
          name={name}
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          className="p-2 border rounded outline-none"
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          className="p-2 border rounded outline-none"
        />
      )}
    </div>
  );
};

export default ReusableField;

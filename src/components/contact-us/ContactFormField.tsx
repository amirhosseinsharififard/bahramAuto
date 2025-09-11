'use client';

interface ContactFormFieldProps {
  t: (key: string) => string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  rows?: number;
}

const ContactFormField = ({
  t,
  type,
  name,
  label,
  value,
  onChange,
  required = false,
  rows = 5,
}: ContactFormFieldProps) => {
  const baseClasses =
    'w-full rounded-lg border border-white/20 bg-gray-800/50 px-4 py-3 text-white focus:border-blue-500 focus:bg-gray-800/70 focus:ring-2 focus:ring-blue-500';

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {label} {required && '*'}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={baseClasses}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default ContactFormField;

import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FC } from "react";
import { FiSearch } from "react-icons/fi";
import * as Yup from "yup";
import Button from "../ui/Button";

type SearchInputProps = {
  name: string;
  placeholder?: string;
  onSearch: (term: string) => void;
  validationSchema?: Yup.ObjectSchema<Record<string, unknown>>;
  enableSubmit?: boolean;
};

export const SearchInput: FC<SearchInputProps> = ({
  name,
  placeholder = "Egzersiz ara...",
  onSearch,
  validationSchema,
  enableSubmit = false,
}) => {
  const initialValues = { [name]: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (enableSubmit) {
          const term = values[name]?.trim();
          onSearch(term.length >= 2 ? term : "");
        }
      }}
      validateOnChange
    >
      {({ setFieldValue, errors, touched }) => {
        const hasError = touched[name] && errors[name];

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setFieldValue(name, value);

          if (!enableSubmit) {
            if (value.trim().length >= 2) {
              onSearch(value.trim());
            } else {
              onSearch("");
            }
          }
        };

        return (
          <Form className="relative w-full">
            <div className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none">
              <FiSearch size={16} className="text-gray-600" />
            </div>

            <Field
              name={name}
              as="input"
              placeholder={placeholder}
              autoComplete="off"
              className={`w-full pl-8 pr-10 py-[3px] text-xs text-gray-400 border rounded-lg transition-all duration-150 placeholder:text-gray-600
                ${
                  hasError
                    ? "border-red-400 ring-1 ring-red-400"
                    : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary"
                }
              `}
              onChange={handleChange}
            />

            {enableSubmit && (
              <Button
                type="submit"
                variant="ghost"
                className="absolute -right-0.5 top-1/2 -translate-y-1/2 "
              >
                <FiSearch size={16} />
              </Button>
            )}

            <ErrorMessage
              name={name}
              component="div"
              className="absolute mt-1 left-2 text-[9px] font-mont text-red-400"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

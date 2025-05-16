import { Formik, Form, Field, ErrorMessage } from "formik";
import { SearchSchema } from "../../validations/searchValidation";
import { FiSearch } from "react-icons/fi";
import type { FC } from "react";

type SearchInputProps = {
  onSearch: (term: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ searchTerm: "" }}
      validationSchema={SearchSchema}
      onSubmit={() => {}}
      validateOnChange={false}
      validateOnBlur={true}
    >
      {({ setFieldValue, handleBlur }) => (
        <Form className="relative w-full">
          <FiSearch
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-600 pointer-events-none"
            size={16}
          />
          <Field
            name="searchTerm"
            as="input"
            placeholder="Egzersiz ara..."
            autoComplete="off"
            onBlur={handleBlur}
            className="w-full pl-8 pr-2 py-[3px] text-xs text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all duration-150 placeholder:text-gray-600"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              setFieldValue("searchTerm", value);
              onSearch(value.trim());
            }}
          />
          <ErrorMessage
            name="searchTerm"
            component="div"
            className="absolute mt-1 left-2 text-xs text-primary"
          />
        </Form>
      )}
    </Formik>
  );
};

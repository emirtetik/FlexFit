import * as Yup from "yup";

export const SearchSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .min(2, "En az 2 karakter giriniz").required("Arama terimi boş olamaz")
});
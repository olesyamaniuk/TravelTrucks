import * as Yup from "yup";

export const formValidation = Yup.object({
    name: Yup.string()
      .min(3, "Min 3 characters")
      .max(50, "Max 50 characters")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    date: Yup.date()
      .nullable(),
    comment: Yup.string(),
});
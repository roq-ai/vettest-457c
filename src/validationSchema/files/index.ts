import * as yup from 'yup';

export const fileValidationSchema = yup.object().shape({
  file_name: yup.string().required(),
  file_size: yup.number().integer().required(),
  file_type: yup.string().required(),
  pet_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

const PASSWORD_MIN_LENGTH = 6;
const EMAIL_REQUIRED_COPY = 'Email is required';
const EMAIL_VALID_COPY = 'Email must be a valid email';
const PASSWORD_REQUIRED_COPY = 'Password is required';
const PASSWORD_VALID_COPY = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;

export const emailPasswordSchema = yup.object().shape({
  email: yup.string().required(EMAIL_REQUIRED_COPY).email(EMAIL_VALID_COPY),
  password: yup.string().required(PASSWORD_REQUIRED_COPY).min(PASSWORD_MIN_LENGTH, PASSWORD_VALID_COPY)
});

export const emailSchema = yup.object().shape({
  email: yup.string().required(EMAIL_REQUIRED_COPY).email(EMAIL_VALID_COPY)
});

export const passwordSchema = yup.object().shape({
  password: yup.string().required(PASSWORD_REQUIRED_COPY).min(PASSWORD_MIN_LENGTH, PASSWORD_VALID_COPY)
});

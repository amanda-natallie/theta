declare namespace formConstants {
  interface UserProps {
    firstName: string;
    lastName: string;
    email: string;
    birthDay: number;
    birthMonth: number;
    birthYear: number;
    state: string;
    city: string;
    ddd: number;
    phone: number;
    user: string;
    password: string;
    emailConfirm: string;
    passwordConfirm: string;
    termsAccepted: boolean;
  }
  interface ThetaProps {
    firstName: string;
    lastName: string;
    email: string;
    birthDay: number;
    birthMonth: number;
    birthYear: number;
    state: string;
    city: string;
    ddd: number;
    phone: number;
    user: string;
    password: string;
    emailConfirm: string;
    passwordConfirm: string;
    termsAccepted: boolean;
    languages: Array<string>;
    facebook: string,
    instagram: string,
    linkedin: string,
    youtube: string,
    twitter: string,
    extra: string;
  }

  interface LoginProps {
    user?: string
    password?: string
    email?: string
  }
}

export default formConstants;

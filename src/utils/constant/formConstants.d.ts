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
    phone: string;
    user: string;
    password: string;
    emailConfirm: string;
    passwordConfirm: string;
    termsAccepted: boolean;
  }
  export interface ILanguageList {
    name?: string;
    language?: string;
  }
  
  export interface ISocialList {
    name?: string;
    link?: string;
  }
  export interface ITherapist {
    name: string;
    lastName: string;
    email: string;
    email_confirmation: string;
    dayBorn: string,
    monthBorn: string,
    yearBorn: string;
    state: string;
    city: string;
    phone: string;
    username: string;
    password: string;
    password_confirmation: string;
    typeUser: string;
    languages?: ILanguageList[],
    links?: ISocialList[],
    certificates?: Array<string>
  }

  interface LoginProps {
    user?: string
    password?: string
    email?: string
  }
}

export default formConstants;

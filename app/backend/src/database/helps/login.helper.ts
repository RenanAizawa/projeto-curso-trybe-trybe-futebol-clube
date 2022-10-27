export const existEmailAndPassword = (email: string, password: string) => {
  // console.log('passei por aqui, verify1');

  if (!email || !password) return false;
  return true;
};

export const emailAndPasswordIsValid = (email: string, password: string) => {
  // console.log('passei por aqui, verify2');
  const regex: any = /.*@.*\.com/i;
  if (!regex.test(email) || password.length < 6) return false;
  return true;
};

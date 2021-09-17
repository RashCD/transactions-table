import { random, finance, datatype, date } from 'faker';

export const generateStatus = () => {
  const exampleStatus = [
    'Success',
    'Paid',
    'Pending',
    'Failed',
    'Refunded',
    'Reversed',
    'Settled',
    'Completed',
  ];
  return random.arrayElement(exampleStatus);
};

export const generateType = () => {
  const exampleType = ['Direct', 'Invoice', 'Disbursement'];
  return random.arrayElement(exampleType);
};

export const generateBank = () => {
  const exampleBanks = ['eWallet', 'Bank', 'Cards'];
  return random.arrayElement(exampleBanks);
};

export const generateAccountNo = () => {
  const range = datatype.number({ min: 11, max: 15 });
  return finance.account(range);
};

export const generateCountry = () => {
  return finance.currencyCode();
};

export const generateAmount = () => {
  return finance.amount(0, 1000000, 2);
};

export const generateReference = () => {
  const randNum = datatype.number({
    min: 10000000000000000000,
    max: 99999999999999999999,
    precision: 1,
  });
  return `external-${randNum}`;
};

export const generateDate = () => {
  const startDate = `${new Date().getFullYear - 5}/01/01`;
  return date.between(startDate, new Date()).toLocaleString();
};

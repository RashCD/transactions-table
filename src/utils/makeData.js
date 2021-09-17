import {
  generateAccountNo,
  generateAmount,
  generateBank,
  generateCountry,
  generateDate,
  generateReference,
  generateStatus,
  generateType,
} from './faker';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const generateData = () => {
  return {
    status: generateStatus(),
    type: generateType(),
    bank: generateBank(),
    account: generateAccountNo(),
    country: generateCountry(),
    amount: generateAmount(),
    reference: generateReference(),
    date: generateDate(),
  };
};

export default function makeData(length) {
  return range(length).map(() => {
    return {
      ...generateData(),
    };
  });
}

export const choosOneRandom = (array) => {
  const randNrInArray = Math.floor(Math.random() * array.length);
  console.log({ randNrInArray });
  return array[randNrInArray];
};
export const getDate = () => {
  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  return `${day}|${month}|${year}`;
};

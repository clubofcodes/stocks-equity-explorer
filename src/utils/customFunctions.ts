/**
 * to verify the argument value/string is false, null, undefined, empty or length is 0 then true else false.
 * @param {any} checkValue multiple parameters which are string variables.
 * @returns boolean value.
 */
export const isEmpty = (orgValue: any) => {
  let checkValue = orgValue;
  if (typeof orgValue === 'number') checkValue = String(orgValue);
  if (checkValue === false) return !checkValue;
  if (checkValue === true) return !checkValue;
  return (
    checkValue === null ||
    checkValue === 'undefined' ||
    checkValue === 'null' ||
    checkValue === undefined ||
    checkValue === '' ||
    (typeof checkValue === 'string' && checkValue.trim() === '') ||
    checkValue.length === 0 ||
    Object.keys(checkValue).length === 0
  );
};


export function transformData(rawData) {
  const data = [];

  // Loop through each entry in the Time Series (Daily)
  for (const date in rawData['Time Series (Daily)']) {
    // Extract date and corresponding volume
    const volume = parseInt(rawData['Time Series (Daily)'][date]['5. volume']);
    
    // Format date to 'Mar DD' format
    const formattedDate = date.substring(5).replace('-', ' ');

    // Push date and volume to the data array
    data.push({
      date: formattedDate,
      Apples: volume
    });
  }

  // Sort data by date in ascending order
  data.sort((a, b) => new Date(a.date + ' 2024') - new Date(b.date + ' 2024'));

  return data;
}

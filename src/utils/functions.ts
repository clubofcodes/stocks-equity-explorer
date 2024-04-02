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

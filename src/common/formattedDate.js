export const formattedDate = (inputDate) => {
   const startDate = new Date(inputDate);
   const day = startDate.getDate();
   const month = startDate.getMonth() + 1;
   const year = startDate.getFullYear();
   const date = `${day}.${month}.${year}`;
   return date;
 };
//  Get current data

// let currentDate = new Date();

// // calculate start data (current date - 1 month)
// let startDate = new Date();
// startDate.setMonth(startDate.getMonth() - 1);

// // fORMATE DATES AS YYYY-MM-DD
// let startDateStr = startDate.toISOString().slice(0, 10);
// console.log(startDate)
// let endDateStr = currentDate.toISOString().slice(0, 10);
 
 export const fetchNews = async(topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}from=2024-05-01&sortBy=publishedAt&apiKey=312cb973cab34a27b45e6eb8275e634e`);
    const data = await response.json();
   //  console.log(data)
    return data.articles;
 }
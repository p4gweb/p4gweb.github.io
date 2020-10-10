const fs = require('fs');
const path = require('path');

const files = fs.readdirSync("src/routes/news/weekly");

const posts = [];
for (let i = 0; i < files.length; i++) {
  let fdate = files[i].substring(0, 8);
  posts.push({
    title: fdate,
    date: fdate,
    link: `weekly/${path.basename(files[i], '.md')}`,
    slug: files[i]
  })
}

// sort by descending date
posts.sort((a,b) => b.date - a.date);
console.log(posts);
export default posts;

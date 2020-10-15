const fs = require('fs');
const path = require('path');
const frontMatter = require('front-matter');

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

for (let i = 0; i <posts.length; i++) {
  const a = fs.readFileSync(`src/routes/news/weekly/${posts[i].slug}`, {
    encoding: 'utf8'
  });
  const afm = frontMatter(a);
  posts[i].tags = afm.attributes.tags;
}

export default posts;

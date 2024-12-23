import { writeFile } from 'fs/promises';

// Cấu hình các URL trong ứng dụng
const urls = [
  { loc: '/', changefreq: 'never', priority: 1.0 }
];

// Tên miền chính của ứng dụng
const hostname = 'http://localhost:5174';

// Hàm tạo nội dung sitemap
const generateSitemap = (urls, hostname) => {
  const urlSet = urls.map(
    (url) => `
    <url>
        <loc>${hostname}${url.loc}</loc>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlSet.join('\n')}
  </urlset>`;
};

// Tạo sitemap và ghi ra file
const createSitemap = async () => {
  try {
    const sitemapContent = generateSitemap(urls, hostname);
    const outputPath = './public/sitemap.xml'; // Đường dẫn lưu file
    await writeFile(outputPath, sitemapContent);
    console.log(`Sitemap đã được tạo tại: ${outputPath}`);
  } catch (error) {
    console.error('Lỗi khi tạo sitemap:', error);
  }
};

// Gọi hàm để tạo sitemap
createSitemap();

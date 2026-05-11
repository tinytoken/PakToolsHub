import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON
  app.use(express.json());

  // Special files
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /
Allow: /tools
Allow: /blog
Allow: /category
Disallow: /api/
Disallow: /dist/
Disallow: /node_modules/
Disallow: /*?fbclid=
Disallow: /*?utm_
Disallow: /*?gclid=

# Specifically allow professional tools
Allow: /tool/

# Sitemap location
Sitemap: https://pak-tools-hub.vercel.app/sitemap.xml

# Prevent AI scrapers from high-frequency crawl
User-agent: CCBot
Disallow: /
User-agent: GPTBot
Disallow: /
`);
  });

  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    const baseUrl = "https://paktoolshub.com";
    const lastMod = new Date().toISOString().split('T')[0];

    const staticPages = [
      { path: "", priority: "1.0", freq: "daily" },
      { path: "/tools", priority: "0.9", freq: "daily" },
      { path: "/blog", priority: "0.8", freq: "daily" },
      { path: "/about", priority: "0.5", freq: "monthly" },
      { path: "/contact", priority: "0.5", freq: "monthly" },
      { path: "/privacy", priority: "0.3", freq: "monthly" },
      { path: "/terms", priority: "0.3", freq: "monthly" }
    ];

    const categories = [
      "/category/calculators",
      "/category/students",
      "/category/pakistan",
      "/category/pdf",
      "/category/image",
      "/category/seo"
    ];

    const tools = [
      "/tool/age-calculator",
      "/tool/zakat-calculator",
      "/tool/salary-tax",
      "/tool/cgpa-calculator",
      "/tool/matric-percentage",
      "/tool/loan-emi",
      "/tool/electricity-bill",
      "/tool/image-compressor",
      "/tool/jpg-to-png",
      "/tool/pdf-merge",
      "/tool/word-counter",
      "/tool/meta-generator"
    ];

    const blogs = [
      "/blog/how-to-calculate-cgpa-pakistan",
      "/blog/fbr-salary-tax-guide-2024-25",
      "/blog/how-to-compress-images-without-losing-quality",
      "/blog/zakat-calculation-explained-pakistan",
      "/blog/best-seo-tools-for-bloggers-2024",
      "/blog/best-pdf-tools-online-2024",
      "/blog/how-to-convert-jpg-to-png",
      "/blog/best-productivity-tools-students",
      "/blog/how-to-improve-website-seo",
      "/blog/best-free-online-tools-2026"
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${staticPages.map(p => `
  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('')}
  ${categories.map(path => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${tools.map(path => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
  ${blogs.map(path => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;
    res.send(xml);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

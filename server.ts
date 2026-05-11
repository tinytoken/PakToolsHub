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
    res.send("User-agent: *\nAllow: /\nSitemap: https://paktoolshub.com/sitemap.xml");
  });

  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    const baseUrl = "https://paktoolshub.com";
    const pages = [
      "",
      "/tools",
      "/blog",
      "/about",
      "/contact",
      "/privacy",
      "/disclaimer",
      "/terms",
      "/refund",
      "/dmca",
      "/cookies",
      "/accessibility",
      "/category/calculators",
      "/category/students",
      "/category/pakistan",
      "/category/pdf",
      "/category/seo",
      "/tool/age-calculator",
      "/tool/zakat-calculator",
      "/tool/salary-tax",
      "/tool/cgpa-calculator"
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === "" ? "daily" : "weekly"}</changefreq>
    <priority>${page === "" ? "1.0" : page.startsWith("/tool") ? "0.9" : "0.7"}</priority>
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

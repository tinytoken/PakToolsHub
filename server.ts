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
      "/tool/cgpa-calculator",
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

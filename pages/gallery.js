// F:\Benne Simsim\website\benne.art\pages\gallery.js

import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "data", "gallery.json");
  const galleryData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    props: { galleryData },
  };
}

export default function Gallery({ galleryData }) {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#e0e0e0",
        minHeight: "100vh",
        padding: "1rem",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      }}
    >
      <Head>
        <title>Gallery | Benne Simsim</title>
        <meta name="description" content="Browse all artworks by Benne Simsim" />
      </Head>

      {/* Top Navigation */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        {/* Home Icon */}
        <Link href="/">
          <a
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "#fff",
              textDecoration: "none",
            }}
            title="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </a>
        </Link>

        {/* Gallery (active) */}
        <span
          style={{
            color: "#fff",
            fontSize: "1rem",
            textDecoration: "underline",
          }}
        >
          Gallery
        </span>

        {/* Contact Link */}
        <Link href="/contact">
          <a
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Contact
          </a>
        </Link>
      </header>

      {/* Page Heading */}
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem" }}>
        Gallery
      </h1>

      {/* Centered Grid of Fixed-Width Cards */}
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gridGap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, 240px)",
        }}
      >
        {galleryData.map((item) => (
          <Link key={item.slug} href={`/gallery/${item.slug}`}>
            <a
              style={{
                display: "block",
                width: "240px",
                backgroundColor: "#222",
                border: "1px solid #333",
                borderRadius: "6px",
                overflow: "hidden",
                textDecoration: "none",
                color: "#fff",
                transition: "transform 0.2s ease, boxShadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "100%",
                  // keep 3:2 ratio → 240px × 160px
                  height: "0",
                  paddingBottom: "66.6667%",
                  position: "relative",
                  backgroundColor: "#111",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  backgroundColor: "#222",
                  padding: "0.75rem",
                  textAlign: "center",
                }}
              >
                {item.title}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

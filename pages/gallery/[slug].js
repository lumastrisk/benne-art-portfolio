// F:\Benne Simsim\website\benne.art\pages\gallery\[slug].js

import Head from "next/head";
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "data", "gallery.json");
  const galleryData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const paths = galleryData.map((item) => ({
    params: { slug: item.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public", "data", "gallery.json");
  const galleryData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const item = galleryData.find((art) => art.slug === params.slug);
  return { props: { item } };
}

export default function ArtworkDetail({ item }) {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#e0e0e0",
        minHeight: "100vh",
        padding: "1rem",
        boxSizing: "border-box",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      }}
    >
      <Head>
        <title>{item.title} | Benne Simpson</title>
        <meta name="description" content={item.description} />
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
        {/* Left‐side Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
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

          {/* Gallery Link */}
          <Link href="/gallery">
            <a
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Gallery
            </a>
          </Link>

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
        </nav>

        {/* Back to Gallery on the right */}
        <div style={{ marginLeft: "auto" }}>
          <Link href="/gallery">
            <a
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              ← Back to Gallery
            </a>
          </Link>
        </div>
      </header>

      {/* Title */}
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        {item.title}
      </h1>

      {/* Responsive Video Player */}
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <video
          controls
          poster={item.thumbnail}
          style={{
            width: "100%",
            maxWidth: "100vw",
            maxHeight: "100vh",
            height: "auto",
            borderRadius: "6px",
            backgroundColor: "#000",
          }}
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Description */}
      <p
        style={{
          marginBottom: "1rem",
          fontSize: "1.125rem", /* 18px */
          lineHeight: 1.6,
        }}
      >
        {item.description}
      </p>

      {/* Metadata Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          fontSize: "1rem", /* 16px */
          marginBottom: "1rem",
        }}
      >
        <div>
          <strong>Runtime:</strong> {item.runtime}
        </div>
        <div>
          <strong>Format:</strong> {item.format}
        </div>
        <div>
          <strong>FPS:</strong> {item.fps}
        </div>
        <div>
          <strong>Creation Date:</strong> {item.creationDate}
        </div>
        <div>
          <strong>Author:</strong> {item.author}
        </div>
      </div>

      {/* Software Section */}
      {item.software && item.software.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <h2
            style={{
              fontSize: "1.5rem", /* 24px */
              fontWeight: 600,
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Software Used
          </h2>
          <ul
            style={{
              paddingLeft: "1.25rem",
              color: "#cccccc",
              fontSize: "1rem", /* 16px */
              lineHeight: 1.6,
            }}
          >
            {item.software.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      )}

      {/* AI Used Section */}
      {item.ai && item.ai.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem", /* 24px */
              fontWeight: 600,
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            AI Used
          </h2>
          <ul
            style={{
              paddingLeft: "1.25rem",
              color: "#cccccc",
              fontSize: "1rem", /* 16px */
              lineHeight: 1.6,
            }}
          >
            {item.ai.map((engine) => (
              <li key={engine}>{engine}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Download Link */}
      <div style={{ marginTop: "1.5rem", fontSize: "1rem" }}>
        <a
          href={item.video}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2ecc71",
            textDecoration: "none",
            fontSize: "1rem", /* 16px */
            fontWeight: 500,
          }}
        >
          Download File
        </a>
      </div>
    </div>
  );
}

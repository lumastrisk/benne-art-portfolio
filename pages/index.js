// F:\Benne Simsim\website\benne.art\pages\index.js

import Head from "next/head";
import Link from "next/link";
import galleryData from "../public/data/gallery.json";

export default function Home() {
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
        <title>Benjamin Simpson (@bennesimsim)</title>
        <meta
          name="description"
          content="Portfolio of Benjamin Simpson (@bennesimsim) showcasing mixed-media artwork."
        />
        {/* Open Graph preview image */}
        <meta property="og:image" content="/preview.jpg" />
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
      </header>

      <main>
        {/* Page Title */}
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          Benjamin Simpson (@bennesimsim)
        </h1>

        {/* Button Bar */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {/* Coinbase */}
          <a
            href="https://commerce.coinbase.com/checkout/a33728b9-f5da-4386-bed1-b7eed7c27f22"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#2ecc71",
              color: "#fff",
              fontSize: "0.9rem",
              textDecoration: "none",
              borderRadius: "4px",
              height: "32px",
              padding: "0 0.75rem",
              minWidth: "80px",
            }}
          >
            Coinbase
          </a>

          {/* MetaMask (placeholder) */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#555",
              color: "#ccc",
              fontSize: "0.9rem",
              borderRadius: "4px",
              height: "32px",
              padding: "0 0.75rem",
              minWidth: "80px",
              cursor: "not-allowed",
            }}
            title="MetaMask donation coming soon"
          >
            MetaMask
          </span>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bennesimsim/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#c13584",
              color: "#fff",
              fontSize: "0.9rem",
              textDecoration: "none",
              borderRadius: "4px",
              height: "32px",
              padding: "0 0.75rem",
              minWidth: "80px",
            }}
          >
            Instagram
          </a>
        </div>

        {/* Discover My Works */}
        <section style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Discover My Works
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
            }}
          >
            {galleryData.map((item) => (
              <Link href={`/gallery/${item.slug}`} key={item.slug}>
                <a
                  style={{
                    display: "block",
                    width: "100%",
                    maxWidth: "240px",
                    backgroundColor: "#222",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "#fff",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0, 0, 0, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "100%",
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
        </section>
      </main>
    </div>
  );
}

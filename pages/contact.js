// F:\Benne Simsim\website\benne.art\pages\contact.js

import Head from "next/head";
import Link from "next/link";

export default function Contact() {
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
        <title>Contact | Benjamin W Simpson</title>
        <meta
          name="description"
          content="Contact Benjamin W Simpson (Benne Simsim) on Instagram"
        />
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

        {/* Contact (active) */}
        <span
          style={{
            color: "#fff",
            fontSize: "1rem",
            textDecoration: "underline",
          }}
        >
          Contact
        </span>
      </header>

      {/* Main Contact Content */}
      <main
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        {/* Full Name */}
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "2.5rem",
            fontWeight: 400,
            marginBottom: "1rem",
            color: "#ffffff",
            lineHeight: 1.2,
          }}
        >
          Benjamin W Simpson
        </h1>

        {/* Instagram Handle */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Instagram Logo (inline SVG) */}
          <a
            href="https://www.instagram.com/bennesimsim/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e0e0e0", textDecoration: "none" }}
            title="Instagram @bennesimsim"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 448 512"
              fill="#e0e0e0"
            >
              <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54.39,54.39,0,0,0-30.13-30.13C289,125,224,125,224,125s-65,0-94.58,6.5a54.4,54.4,0,0,0-30.13,30.13C92,154.91,92,219.9,92,219.9s0,65,6.5,94.58a54.4,54.4,0,0,0,30.13,30.13C159,369,224,369,224,369s65,0,94.58-6.5a54.39,54.39,0,0,0,30.13-30.13c6.5-29.58,6.5-94.58,6.5-94.58S355.21,163.65,348.71,161.66ZM224,338c-45.42,0-82-36.58-82-82s36.58-82,82-82,82,36.58,82,82S269.42,338,224,338Zm85.33-148.7a19.11,19.11,0,1,1,19.11-19.11A19.14,19.14,0,0,1,309.33,189.3Zm-85.33-95.3c-59.56,0-108,48.41-108,108S164.44,310,224,310s108-48.41,108-108S283.56,94,224,94Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/bennesimsim/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              fontSize: "1.25rem",
              fontWeight: 300,
              textDecoration: "none",
              lineHeight: 1.2,
            }}
          >
            @bennesimsim
          </a>
        </div>

        {/* Additional Contact Info or Message */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#cccccc",
            marginBottom: "2rem",
          }}
        >
          Feel free to reach out via Instagram for collaboration inquiries or general
          questions. I’ll do my best to respond within 48 hours.
        </p>

        {/* Optional: Email or Other Platforms */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#cccccc",
          }}
        >
          {/* You can uncomment and edit this if you wish to display an email address */}
          {/* Email: <a href="mailto:benjamin.w.simpson@example.com" style={{ color: "#2ecc71" }}>benjamin.w.simpson@example.com</a> */}
        </p>
      </main>
    </div>
  );
}

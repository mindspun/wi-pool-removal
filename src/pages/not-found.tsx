import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ color: "#0A1628" }}>404</h1>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#0A1628" }}>Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-white"
          style={{ background: "#00BCD4" }}
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}

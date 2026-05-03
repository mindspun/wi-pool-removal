import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-foreground mb-2">404 — Page Not Found</h1>
        <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
        <Link href="/" className="bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded hover:bg-primary/90 transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}

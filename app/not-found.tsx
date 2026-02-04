import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import RootLayout from "./layout";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-sm text-center border-none bg-transparent shadow-none flex flex-col items-center p-8">
        {/* Icon */}
        <AlertCircle className="w-16 h-16 text-red-500 mb-6" />

        {/* 404 Text */}
        <h1 className="text-6xl font-bold mb-2">404</h1>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        {/* Button */}
        <Link href="/">
          <Button variant="default" className="w-full">
            Go Back Home
          </Button>
        </Link>
      </Card>
    </div>
  );
}

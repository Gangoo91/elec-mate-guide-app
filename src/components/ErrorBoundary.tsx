
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#151812] text-[#FFC900] p-4">
          <div className="w-full max-w-md p-6 bg-[#22251e] border border-[#FFC900]/20 rounded-lg shadow-lg text-center">
            <AlertTriangle className="w-16 h-16 text-[#FFC900] mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <div className="text-[#FFC900]/80 mb-6 text-sm overflow-auto max-h-40 text-left p-3 bg-[#151812] rounded">
              {this.state.error?.toString() || "An unexpected error occurred"}
            </div>
            <div className="flex flex-col space-y-3">
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] w-full"
              >
                Reload Page
              </Button>
              <Link to="/dashboard" className="w-full">
                <Button 
                  variant="outline" 
                  className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 w-full"
                  onClick={() => this.setState({ hasError: false })}
                >
                  Return to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

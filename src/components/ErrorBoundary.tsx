
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { RefreshCw, AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  private handleReload = () => {
    window.location.reload();
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background" role="alert">
          <div className="max-w-md w-full space-y-6">
            <Alert variant="destructive" className="border-[#FFC900]/30 bg-[#22251e]">
              <AlertTriangle className="h-5 w-5 text-[#FFC900]" />
              <AlertTitle className="text-xl font-bold text-[#FFC900]">Something went wrong</AlertTitle>
              <AlertDescription className="text-[#FFC900]/70">
                {this.state.error?.message || 'An unexpected error occurred'}
              </AlertDescription>
            </Alert>

            <div className="flex flex-col space-y-2">
              <Button
                onClick={this.handleReload}
                className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] w-full"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reload Page
              </Button>

              <Button
                onClick={this.handleReset}
                variant="outline"
                className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 w-full"
              >
                Try to Recover
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

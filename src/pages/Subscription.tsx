
import React, { Suspense, lazy, useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Loader2 } from "lucide-react";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";

// Lazy load the SubscriptionContent component with prefetching
const SubscriptionContent = lazy(() => {
  // Start a timeout to show loading state for a minimum time to prevent flashing
  const displayPromise = new Promise(resolve => setTimeout(resolve, 300));
  // Load the actual component
  const componentPromise = import("@/components/subscription/SubscriptionContent");
  // Wait for both the display delay and the component to load
  return Promise.all([displayPromise, componentPromise]).then(([_, module]) => module);
});

// Prefetch subscription-related components when idle
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(() => {
    import("@/components/subscription/SubscriptionPlanCard");
    import("@/components/subscription/BillingCycleSelector");
  });
}

// Error boundary component to catch rendering errors
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Subscription page error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-1 py-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
          <p className="text-white mb-6">There was a problem loading the subscription page</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-[#FFC900] text-black rounded-md hover:bg-[#e5b700]"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading spinner component with delayed appearance to prevent flashing
const DelayedLoadingSpinner = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  if (!showSpinner) return null;
  
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <Loader2 className="h-12 w-12 text-[#FFC900] animate-spin mb-4" />
      <p className="text-[#FFC900]/70">Loading subscription options...</p>
    </div>
  );
};

const Subscription = () => {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-1 py-6 sm:px-3 md:px-2">
        <ErrorBoundary>
          <SubscriptionProvider>
            <Suspense fallback={<DelayedLoadingSpinner />}>
              <SubscriptionContent />
            </Suspense>
          </SubscriptionProvider>
        </ErrorBoundary>
      </div>
    </MainLayout>
  );
};

export default Subscription;

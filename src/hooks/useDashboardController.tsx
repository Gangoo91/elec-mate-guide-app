
import { useState } from "react";

/**
 * Custom hook to control Dashboard rendering and prevent flickering issues
 */
export function useDashboardController() {
  // Simply return ready state as true
  // No state changes or side effects that could cause flickering
  return { isReady: true };
}

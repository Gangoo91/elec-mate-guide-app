
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import React from "react";

interface LoginSocialButtonsProps {
  onSocialLogin: (provider: string) => void;
  isSubmitting?: boolean;
}

const LoginSocialButtons: React.FC<LoginSocialButtonsProps> = ({
  onSocialLogin,
  isSubmitting,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
    <Button
      type="button"
      onClick={() => onSocialLogin("Google")}
      variant="outline"
      className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white w-full"
      disabled={isSubmitting}
    >
      <img src="/lovable-uploads/photo-1573804633927-bfcbcd909acd" alt="Google logo" className="w-5 h-5 mr-2" />
      Google
    </Button>
    <Button
      type="button"
      onClick={() => onSocialLogin("GitHub")}
      variant="outline"
      className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white w-full"
      disabled={isSubmitting}
    >
      <Github size={20} className="mr-2" />
      GitHub
    </Button>
  </div>
);

export default LoginSocialButtons;

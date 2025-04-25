import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  children?: React.ReactNode;
  fullCardLink?: string;
}

const ResourceCard = ({ 
  title, 
  description, 
  icon, 
  action, 
  children, 
  fullCardLink 
}: ResourceCardProps) => {
  const CardWrapper = fullCardLink ? Link : 'div';
  const wrapperProps = fullCardLink ? { to: fullCardLink } : {};

  return (
    <CardWrapper 
      {...wrapperProps}
      className={`block h-full ${fullCardLink ? 'cursor-pointer' : ''}`}
    >
      <Card className="h-full bg-card border-border/20 hover:border-primary/30 transition-all duration-300">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="text-primary">{icon}</div>
            <div>
              <h3 className="text-foreground font-medium text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
              {children && <div className="mt-4">{children}</div>}
              {action && (
                <div className="mt-4">
                  {action.href ? (
                    <Link 
                      to={action.href}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      {action.label}
                    </Link>
                  ) : (
                    <Button 
                      onClick={action.onClick}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {action.label}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default ResourceCard;

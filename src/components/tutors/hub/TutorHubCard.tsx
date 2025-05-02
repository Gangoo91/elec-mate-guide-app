
import React, { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface TutorHubCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  content: string;
  path: string;
  onClick?: (path: string) => void;
}

const TutorHubCard: React.FC<TutorHubCardProps> = ({
  title,
  description,
  icon,
  content,
  path,
  onClick
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    console.log("TutorHubCard clicked - Navigating to:", path);
    if (onClick) {
      onClick(path);
    } else {
      navigate(path);
    }
  };
  
  return (
    <Card 
      className="cursor-pointer hover:border-primary/50 transition-all hover:shadow-md" 
      onClick={handleClick}
    >
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default TutorHubCard;


import React, { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TutorHubCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  content: string;
  path: string;
  onClick: (path: string) => void;
}

const TutorHubCard: React.FC<TutorHubCardProps> = ({
  title,
  description,
  icon,
  content,
  path,
  onClick
}) => {
  return (
    <Card 
      className="cursor-pointer hover:border-primary/50 transition-all hover:shadow-md" 
      onClick={() => onClick(path)}
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

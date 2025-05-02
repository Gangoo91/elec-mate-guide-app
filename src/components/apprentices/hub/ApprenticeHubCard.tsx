
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ApprenticeHubCardProps } from './types';

const ApprenticeHubCard: React.FC<ApprenticeHubCardProps> = ({
  title,
  description,
  icon,
  content,
  path,
  onClick
}) => {
  return (
    <Card 
      className="cursor-pointer hover:border-primary/50 transition-all" 
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

export default ApprenticeHubCard;

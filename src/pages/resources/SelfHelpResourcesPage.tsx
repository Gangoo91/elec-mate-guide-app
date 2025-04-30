
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { BadgeHelp, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SupportCTA from "@/components/support-groups/SupportCTA";

type ResourceCategory = "mindfulness" | "anxiety" | "stress" | "depression" | "sleep";

interface ResourceItem {
  title: string;
  description: string;
  link?: string;
}

const SelfHelpResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>("mindfulness");

  const resourcesByCategory: Record<ResourceCategory, ResourceItem[]> = {
    mindfulness: [
      {
        title: "5-Minute Mindfulness Practice",
        description: "A quick mindfulness exercise focusing on breath awareness that can be done anywhere to center yourself and reduce stress.",
      },
      {
        title: "Body Scan Meditation",
        description: "A guided practice to reconnect with your body, progressively relaxing each part from head to toe.",
        link: "https://www.mindful.org/a-body-scan-meditation-to-help-you-sleep/"
      },
      {
        title: "Mindful Walking Guide",
        description: "Instructions for transforming a regular walk into a mindfulness practice, bringing attention to each step.",
      }
    ],
    anxiety: [
      {
        title: "4-7-8 Breathing Technique",
        description: "A breathing exercise where you inhale for 4 seconds, hold for 7, and exhale for 8 to activate the parasympathetic nervous system.",
      },
      {
        title: "Grounding Techniques",
        description: "The 5-4-3-2-1 method using your senses to anchor yourself in the present moment during anxiety.",
      },
      {
        title: "Progressive Muscle Relaxation",
        description: "A systematic tensing and releasing of muscle groups to reduce physical manifestations of anxiety.",
        link: "https://www.verywellmind.com/how-do-i-practice-progressive-muscle-relaxation-3024400"
      }
    ],
    stress: [
      {
        title: "Quick Stress Reset",
        description: "A 90-second technique to pause and reset your stress response during high-pressure situations.",
      },
      {
        title: "Journaling Prompts",
        description: "Structured writing exercises to process stressful experiences and gain perspective.",
      },
      {
        title: "Guided Visualization",
        description: "Instructions for mentally transporting yourself to a calm, peaceful place when stress levels rise.",
        link: "https://www.healthline.com/health/guided-imagery"
      }
    ],
    depression: [
      {
        title: "Behavioral Activation Guide",
        description: "Step-by-step approach to gradually increase meaningful activities that can help combat depressive symptoms.",
      },
      {
        title: "Gratitude Practice",
        description: "Simple daily exercise to identify and appreciate positive aspects of life, helping to shift focus from negative thoughts.",
      },
      {
        title: "Self-Compassion Exercise",
        description: "Techniques to develop kindness toward yourself during difficult times, counteracting self-criticism.",
        link: "https://self-compassion.org/category/exercises/"
      }
    ],
    sleep: [
      {
        title: "Sleep Hygiene Checklist",
        description: "Evidence-based practices to optimize your sleep environment and pre-sleep routine.",
      },
      {
        title: "Bedtime Wind-Down Ritual",
        description: "A 20-minute sequence to prepare your mind and body for restful sleep.",
      },
      {
        title: "Cognitive Techniques for Insomnia",
        description: "Mental strategies to quiet an active mind and break the cycle of sleep-related worry.",
        link: "https://www.sleepfoundation.org/insomnia/treatment/cognitive-behavioral-therapy-insomnia"
      }
    ]
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Self-Help Resources"
          description="Practical tools and techniques for managing your mental wellbeing"
        />
        
        <div className="mb-6">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BadgeHelp className="h-6 w-6 text-[#FFC900]" />
                <h3 className="text-xl font-semibold text-[#FFC900]">Resource Categories</h3>
              </div>
              
              <div className="mb-6 max-w-md">
                <Select
                  value={selectedCategory}
                  onValueChange={(value) => setSelectedCategory(value as ResourceCategory)}
                >
                  <SelectTrigger className="bg-[#151812] border-[#FFC900]/30 text-[#FFC900]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#22251e] border-[#FFC900]/30">
                    <SelectItem value="mindfulness" className="text-[#FFC900]/90 focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Mindfulness Practices</SelectItem>
                    <SelectItem value="anxiety" className="text-[#FFC900]/90 focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Anxiety Management</SelectItem>
                    <SelectItem value="stress" className="text-[#FFC900]/90 focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Stress Reduction</SelectItem>
                    <SelectItem value="depression" className="text-[#FFC900]/90 focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Depression Support</SelectItem>
                    <SelectItem value="sleep" className="text-[#FFC900]/90 focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Sleep Improvement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-6">
                {resourcesByCategory[selectedCategory].map((resource, index) => (
                  <div key={index} className="p-4 border border-[#FFC900]/20 rounded-md bg-[#151812]">
                    <h4 className="text-lg font-medium text-[#FFC900] mb-2">{resource.title}</h4>
                    <p className="text-[#FFC900]/70 mb-2">{resource.description}</p>
                    {resource.link && (
                      <a 
                        href={resource.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#FFC900] hover:underline inline-flex items-center text-sm"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Additional Self-Help Resources</h3>
              
              <div className="space-y-4">
                <p className="text-[#FFC900]/90">
                  While these self-help techniques can be valuable tools, they work best as part of a comprehensive approach to mental wellbeing. Consider combining these strategies with professional support and community connection.
                </p>
                
                <div className="p-4 border border-[#FFC900]/20 rounded-md bg-[#151812]">
                  <h4 className="text-lg font-medium text-[#FFC900] mb-2">Mental Health Apps</h4>
                  <p className="text-[#FFC900]/70">
                    Many digital tools can help track mood, practice mindfulness, or connect with therapists. Popular options include Headspace, Calm, and Woebot.
                  </p>
                </div>
                
                <div className="p-4 border border-[#FFC900]/20 rounded-md bg-[#151812]">
                  <h4 className="text-lg font-medium text-[#FFC900] mb-2">Books & Workbooks</h4>
                  <p className="text-[#FFC900]/70">
                    Self-help literature can provide structure and guidance. Look for evidence-based resources based on cognitive behavioral therapy or acceptance and commitment therapy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <SupportCTA />
      </div>
    </MainLayout>
  );
};

export default SelfHelpResourcesPage;

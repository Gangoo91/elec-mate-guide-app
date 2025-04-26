
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Bell, Globe, Mail, Settings as SettingsIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [marketingEmails, setMarketingEmails] = React.useState(false);
  
  const handleSavePreferences = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Settings"
          description="Manage your account preferences and notifications"
          icon={<SettingsIcon className="h-6 w-6 text-[#FFC900]" />}
        />

        <div className="space-y-6 mt-6">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#FFC900]">Email Notifications</Label>
                  <p className="text-sm text-[#FFC900]/70">
                    Receive notifications about your account via email
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <Separator className="bg-[#FFC900]/10" />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#FFC900]">Push Notifications</Label>
                  <p className="text-sm text-[#FFC900]/70">
                    Receive notifications through your browser
                  </p>
                </div>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
              <Separator className="bg-[#FFC900]/10" />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#FFC900]">Marketing Emails</Label>
                  <p className="text-sm text-[#FFC900]/70">
                    Receive emails about new features and updates
                  </p>
                </div>
                <Switch
                  checked={marketingEmails}
                  onCheckedChange={setMarketingEmails}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Language & Region
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-[#FFC900]">Language</Label>
                  <p className="text-sm text-[#FFC900]/70">
                    Currently only available in English
                  </p>
                </div>
                <div>
                  <Label className="text-[#FFC900]">Time Zone</Label>
                  <p className="text-sm text-[#FFC900]/70">
                    Automatically set based on your location
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              onClick={handleSavePreferences}
              className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;

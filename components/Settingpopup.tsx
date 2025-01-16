import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

interface SettingPopupProps {
  setIsMobileSettingOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settingpopup: React.FC<SettingPopupProps> = ({
  setIsMobileSettingOpen,
}) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    language: "",
    currency: "",
    emailNotification: false,
    voiceNotification: false,
    pushNotification: false,
    promotionalUpdates: false,
    importantAlerts:false,
  });
  const [isChanged, setIsChanged] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsChanged(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsMobileSettingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsMobileSettingOpen]);

  const handlePopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[24rem] w-full relative h-[35.5rem] overflow-y-auto scroll"
        onClick={handlePopupClick}
      >
        <div className="border-b border-secondarycolor pb-4">
          <h1 className="text-lg font-semibold">Content Settings</h1>
          <h2 className="text-sm font-normal pt-1">
            Adjust your preferences for content, notifications, and more.
          </h2>
        </div>
        <div className="pt-3">
          <div className="space-y-3">
            <label className="font-semibold text-sm">Language</label>
            <Select
              onValueChange={(value) => handleInputChange("language", value)}
            >
              <SelectTrigger className="w-full h-12 outline-none border border-borderColor1 focus:!outline-none">
                <SelectValue
                  className="text-mediumgray2"
                  placeholder="Choose Language"
                />
              </SelectTrigger>
              <SelectContent onMouseDown={(e) => e.stopPropagation()}>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3 pt-3">
            <label className="font-semibold text-sm">Currency</label>
            <input
              type="text"
              placeholder="INR"
              className="w-full h-12 border border-borderColor1 rounded-md focus:!outline-none px-4"
              value={formData.currency}
              onChange={(e) => handleInputChange("currency", e.target.value)}
            />
          </div>
          <div className="space-y-2 pt-3">
            <span className="font-semibold text-sm">Manage Notification</span>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal">Email Notification</span>
              <Switch
                checked={formData.emailNotification}
                onCheckedChange={(checked) =>
                  handleInputChange("emailNotification", checked)
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal">Voice Notification</span>
              <Switch
                checked={formData.voiceNotification}
                onCheckedChange={(checked) =>
                  handleInputChange("voiceNotification", checked)
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal">Push Notification</span>
              <Switch
                checked={formData.pushNotification}
                onCheckedChange={(checked) =>
                  handleInputChange("pushNotification", checked)
                }
              />
            </div>
          </div>
          <div className="space-y-2 pt-1.5">
            <span className="font-semibold text-sm">Notification Type</span>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal">Promotional Updates</span>
              <Switch
                checked={formData.promotionalUpdates}
                onCheckedChange={(checked) =>
                  handleInputChange("promotionalUpdates", checked)
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal">Important Alerts</span>
              <Switch
                checked={formData.importantAlerts}
                onCheckedChange={(checked) =>
                  handleInputChange("importantAlerts", checked)
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-5">
            <button
              onClick={() => setIsMobileSettingOpen(false)}
              className="w-44 h-12 border border-secondarycolor rounded-md text-secondarycolor"
            >
              Cancel
            </button>
            <button
              className={`w-44 h-12 rounded-md ${
                isChanged
                  ? "border border-secondarycolor text-secondarycolor"
                  : "text-textMedium bg-mediumgray3 cursor-not-allowed"
              }`}
              disabled={!isChanged}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settingpopup;
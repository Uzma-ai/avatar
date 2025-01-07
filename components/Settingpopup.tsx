import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

interface SettingPopupProps {
  setIsMobileSettingOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settingpopup: React.FC<SettingPopupProps> = ({
  setIsMobileSettingOpen,
}) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

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
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[24rem] w-full relative h-[35rem] overflow-y-auto scroll"
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
            <Select>
              <SelectTrigger className="w-full h-12 outline-none border border-borderColor1 focus:!outline-none">
                <SelectValue
                  className="text-mediumgray2"
                  placeholder="Choose Language"
                />
              </SelectTrigger>
              <SelectContent>
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
            />
          </div>
          <div className="space-y-4 pt-3">
            <span className="font-semibold text-sm">Manage Notification</span>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal">Email Notification</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal">Voice Notification</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal">Push Notification</span>
              <Switch />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 pt-5">
            <button className="w-44 h-12 border border-secondarycolor rounded-md text-secondarycolor">
              Cancel
            </button>
            <button className="w-44 h-12 bg-mediumgray3 rounded-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settingpopup;
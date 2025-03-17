import { useState } from "react";

const CustomLegend = ({ toggleDataset }: { toggleDataset: (index: number) => void }) => {
  const [checked, setChecked] = useState([true, true, true]);

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    toggleDataset(index);
  };

  return (
    <div className="flex flex-col gap-4 text-nowrap">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={checked[0]} onChange={() => handleCheckboxChange(0)} />
        <span className="w-2 h-2 bg-[#00BCE5] rounded-full"></span>
        <span>Impressions</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={checked[1]} onChange={() => handleCheckboxChange(1)} />
        <span className="w-2 h-2 bg-[#FFCAEA] rounded-full"></span>
        <span>Clicks</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={checked[2]} onChange={() => handleCheckboxChange(2)} />
        <span className="w-2 h-2 bg-[#5182E3] rounded-full"></span>
        <span>Earnings</span>
      </label>
    </div>
  );
};

export default CustomLegend;

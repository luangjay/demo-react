import { SetStateAction, useState } from "react";

export default function SideTab() {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <div>Current tab is {tab}</div>
      <div className="flex w-1/5 flex-col border">
        {[1, 2, 3, 4, 5].map((tabNumber) => (
          <Tab tabNumber={tabNumber} tab={tab} setTab={setTab} />
        ))}
      </div>
    </div>
  );
}

interface TabProps {
  tabNumber: number;
  tab: number;
  setTab: (value: SetStateAction<number>) => void;
}

function Tab({ tabNumber, tab, setTab }: TabProps) {
  return (
    <button
      className={`border hover:bg-gray-500 ${tab === tabNumber && "text-4xl"}`}
      onClick={() => setTab(tabNumber)}
    >
      Tab {tabNumber}
    </button>
  );
}

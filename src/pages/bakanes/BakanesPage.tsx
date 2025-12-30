import {Tab} from "../../components/Tab"
import { Tabs } from "../../components/Tabs"

import { BakanesActions } from "./BakanesActions"
import { BakanesEvidence } from "./BakanesEvidence"
import { BakanesTypes } from "./BakanesType"

export const BakanesPage = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      
      {/* TÍTULO */}
      <h1 className="text-[32px] font-bold text-black mb-6 tracking-tight">
        Acciones
      </h1>

      {/* TABS */}
        <Tabs>
          <Tab label="Acciones">
            <BakanesActions />
          </Tab>
          <Tab label="Tipos">
            <BakanesTypes />
          </Tab>
          <Tab label="Mis acciones">
            <BakanesEvidence />
          </Tab>
          
        </Tabs>
    </div>
  );
}

export default BakanesPage;
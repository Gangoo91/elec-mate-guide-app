
export const sections301: Record<string, { title: string; description: string; content: React.ReactNode }> = {
  "1.1": {
    title: "1.1 Renewable Energy Systems",
    description: "Understanding different types of renewable energy sources and their applications",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Solar Photovoltaic Systems</h3>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Photovoltaic Cell Operation Principles</h4>
            <p>The photovoltaic effect is the basic physical process through which a PV cell converts sunlight into electricity:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>When sunlight hits the semiconductor material in a solar cell, it excites electrons</li>
              <li>These excited electrons move from the valence band to the conduction band</li>
              <li>The movement creates electron-hole pairs</li>
              <li>The built-in electric field separates these charges</li>
              <li>This separation creates voltage across the cell terminals</li>
            </ul>

            <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Types of Solar Panels</h4>
            <div className="space-y-4">
              <p>Modern solar panels come in several varieties:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Monocrystalline Panels</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Made from single crystal silicon</li>
                    <li>Higher efficiency (15-22%)</li>
                    <li>More expensive</li>
                    <li>Better performance in low-light conditions</li>
                  </ul>
                </li>
                <li>
                  <strong>Polycrystalline Panels</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Made from multiple silicon crystals</li>
                    <li>Lower efficiency (13-17%)</li>
                    <li>More affordable</li>
                    <li>Blue speckled appearance</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Add more sections here...
};


import React from 'react';

const GSHPContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Introduction to Ground Source Heat Pumps</h2>
      <p>
        Ground source heat pumps (GSHPs) extract heat from the ground using a network of buried pipes containing a 
        heat transfer fluid. This heat is then used for space heating and hot water production in buildings, offering 
        high efficiency and low carbon emissions.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Working Principles</h3>
      <p>
        Ground source heat pumps operate on the following principle:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Heat is absorbed from the ground into a heat transfer fluid circulating through buried pipes</li>
        <li>This fluid passes through an evaporator where heat is transferred to a refrigerant</li>
        <li>The refrigerant is compressed, raising its temperature significantly</li>
        <li>Heat from the hot refrigerant is transferred to the building's heating system</li>
        <li>The refrigerant expands and cools, ready to absorb more heat</li>
        <li>The cycle continues, providing continuous heating</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Ground Loop Configurations</h2>
      <p>
        The ground heat collector can be installed in several configurations:
      </p>
      
      <h3 className="text-lg font-medium mt-4">Horizontal Ground Loops</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Pipes buried in trenches at a depth of 1-2 meters</li>
        <li>Requires significant land area (typically 2-3 times the heated floor area)</li>
        <li>Lower installation cost than vertical systems</li>
        <li>More susceptible to seasonal temperature variations</li>
        <li>Can be installed in various patterns (straight, coiled, slinky) to maximize heat collection</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Vertical Ground Loops</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Pipes installed in boreholes drilled to depths of 50-200 meters</li>
        <li>Requires minimal land area, making it suitable for smaller plots</li>
        <li>More consistent year-round performance due to stable ground temperatures at depth</li>
        <li>Higher drilling costs compared to horizontal systems</li>
        <li>Typically uses U-tube or coaxial pipe arrangements within the borehole</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Other Configurations</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Pond/lake loops:</strong> Closed loops submerged in water bodies</li>
        <li><strong>Open-loop systems:</strong> Extract and return water from/to an aquifer or water body</li>
        <li><strong>Energy piles:</strong> Integrate heat exchanger pipes within building foundation piles</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Key Components of GSHP Systems</h2>
      <p>
        A ground source heat pump system consists of several key components:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Ground loop:</strong> Pipe network containing heat transfer fluid (usually water/antifreeze mix)</li>
        <li><strong>Circulation pump:</strong> Circulates the heat transfer fluid through the ground loop</li>
        <li><strong>Heat pump unit:</strong> Contains the evaporator, compressor, condenser, and expansion valve</li>
        <li><strong>Buffer tank:</strong> Stores heated water to improve system efficiency and reduce cycling</li>
        <li><strong>Control system:</strong> Manages system operation based on temperature sensors</li>
        <li><strong>Distribution system:</strong> Typically underfloor heating or low-temperature radiators</li>
        <li><strong>Hot water cylinder:</strong> For domestic hot water production</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Efficiency and Performance</h2>
      <p>
        Ground source heat pumps offer excellent efficiency characteristics:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Typical Coefficient of Performance (COP) of 3.5-5.0</li>
        <li>More stable performance than air source heat pumps due to consistent ground temperatures</li>
        <li>Less affected by seasonal weather variations</li>
        <li>Performance depends on ground conditions (thermal conductivity of soil/rock)</li>
        <li>System design must balance ground loop length, fluid flow rate, and building heat demand</li>
        <li>Properly designed systems avoid ground thermal depletion over time</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Electrical Requirements</h2>
      <p>
        Ground source heat pumps have specific electrical requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Power supply requirements similar to air source heat pumps</li>
        <li>Typical power consumption between 3-15 kW depending on system size</li>
        <li>Additional power required for circulation pumps</li>
        <li>May require three-phase supply for larger systems</li>
        <li>Control circuits for system management and integration with building controls</li>
        <li>Appropriate circuit protection and isolation facilities</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Advantages and Limitations</h3>
      
      <h4 className="text-md font-medium mt-4">Advantages of GSHPs</h4>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Higher efficiency than air source heat pumps, especially in cold weather</li>
        <li>More stable performance year-round</li>
        <li>Lower running costs and carbon emissions than conventional heating systems</li>
        <li>Minimal visual impact (most components are underground or inside)</li>
        <li>Very quiet operation</li>
        <li>Long system lifespan (20+ years for heat pump, 50+ years for ground loop)</li>
        <li>Can provide passive cooling in summer</li>
      </ul>
      
      <h4 className="text-md font-medium mt-4">Limitations of GSHPs</h4>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Higher installation costs compared to other heating systems</li>
        <li>Significant groundwork required for installation</li>
        <li>Specialist design and installation skills needed</li>
        <li>Site constraints may limit ground loop options</li>
        <li>Heat extraction may affect ground temperature over time if not properly designed</li>
        <li>May require larger radiators or underfloor heating due to lower operating temperatures</li>
      </ul>
    </div>
  );
};

export default GSHPContent;

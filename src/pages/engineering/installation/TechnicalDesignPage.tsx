
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, List } from "lucide-react";
import { WhitePaperDocument, WhitePaperHeader, WhitePaperContent } from "@/components/technical/templates/WhitePaperDocument";

const TechnicalDesignPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Technical Design Considerations"
          description="Circuit design, sizing, and integration for successful electrical installations"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          {/* Learning Objectives Section */}
          <Collapsible className="mb-6" defaultOpen>
            <CollapsibleTrigger className="flex items-center gap-2 w-full text-left p-4 rounded-lg bg-[#2a2d24] hover:bg-[#32362b] transition-colors">
              <ChevronDown className="h-5 w-5 text-[#FFC900] shrink-0 transition-transform duration-200" />
              <span className="text-[#FFC900] font-medium">Learning Objectives</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-6 bg-[#22251e] rounded-b-lg">
              <div className="text-[#FFC900]/80 space-y-3">
                <p>After completing this section, you should be able to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Calculate electrical loads and determine appropriate circuit designs</li>
                  <li>Select and size cables according to BS 7671 requirements</li>
                  <li>Apply correction factors to cable ratings for different installation methods</li>
                  <li>Design appropriate protection schemes for electrical installations</li>
                  <li>Coordinate protective devices for optimal discrimination</li>
                  <li>Select appropriate equipment based on environment and application</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Circuit Design Section */}
          <LessonContent title="Circuit Design and Load Analysis">
            <div className="space-y-6">
              <p>
                Effective circuit design begins with comprehensive load analysis to ensure the 
                electrical installation can safely and efficiently meet all power requirements.
              </p>
              
              <Accordion type="single" collapsible className="border-[#FFC900]/20">
                <AccordionItem value="load-calculation" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Load Calculation Principles
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Load calculations form the foundation of effective electrical design. Understanding the 
                        electrical demand is crucial before sizing any components or determining circuit arrangements.
                      </p>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Connected Load Assessment</span>: Sum all 
                          electrical equipment ratings to determine total possible load.
                        </li>
                        <li>
                          <span className="font-medium">Maximum Demand Calculation</span>: Apply 
                          diversity factors to account for non-simultaneous operation. Typical
                          diversity factors are 0.5-0.8 for lighting, 0.4-0.7 for general socket outlets, 
                          and 0.6-1.0 for fixed equipment.
                        </li>
                        <li>
                          <span className="font-medium">Load Growth Projection</span>: Allow 20-30% additional 
                          capacity for future expansion in distribution boards.
                        </li>
                        <li>
                          <span className="font-medium">Peak Load Analysis</span>: Identify maximum 
                          concurrent load for determining cable and device ratings.
                        </li>
                        <li>
                          <span className="font-medium">Load Balancing</span>: Distribute loads evenly across 
                          phases in three-phase systems to minimize neutral currents and maintain 
                          voltage balance.
                        </li>
                      </ul>
                      
                      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
                        <p className="text-[#FFC900] font-semibold">Maximum Demand Formula:</p>
                        <p className="text-[#FFC900]/80 mt-2">
                          Maximum Demand (kVA) = Connected Load (kVA) × Diversity Factor
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="circuit-arrangement" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Circuit Arrangement Strategy
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Strategic circuit arrangement improves system reliability, simplifies maintenance,
                        and enhances overall safety.
                      </p>
                      
                      <ul className="list-disc pl-6 space-y-3">
                        <li>
                          <span className="font-medium">Logical Circuit Grouping</span>: Group circuits by:
                          <ul className="list-circle pl-6 mt-2 space-y-1">
                            <li>Function (lighting, power, HVAC, etc.)</li>
                            <li>Location (floor levels, building areas)</li>
                            <li>Load type (resistive, inductive, electronic)</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">Dedicated Circuits</span>: Provide separate circuits for:
                          <ul className="list-circle pl-6 mt-2 space-y-1">
                            <li>High-current appliances ({'>'}13A)</li>
                            <li>Critical equipment requiring isolation</li>
                            <li>Devices sensitive to voltage fluctuations</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">Radial vs. Ring Circuit Design</span>:
                          <ul className="list-circle pl-6 mt-2 space-y-1">
                            <li>Radial circuits: Simple design, lower cost, easier fault finding</li>
                            <li>Ring circuits: Higher capacity, better load sharing, common in UK residential</li>
                            <li>Considerations: cable sizing, protection requirements, load distribution</li>
                          </ul>
                        </li>
                      </ul>
                      
                      <WhitePaperDocument className="mt-6">
                        <WhitePaperHeader>
                          <div className="text-center">
                            <h2 className="text-xl font-bold">Example Circuit Arrangement Table</h2>
                            <p className="text-sm text-gray-600">For a Small Commercial Building</p>
                          </div>
                        </WhitePaperHeader>
                        <WhitePaperContent>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2 text-left">Circuit Type</th>
                                  <th className="border border-gray-300 p-2 text-left">Voltage</th>
                                  <th className="border border-gray-300 p-2 text-left">Cable Size</th>
                                  <th className="border border-gray-300 p-2 text-left">Protection</th>
                                  <th className="border border-gray-300 p-2 text-left">Notes</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">Lighting</td>
                                  <td className="border border-gray-300 p-2">230V</td>
                                  <td className="border border-gray-300 p-2">1.5mm² Twin & Earth</td>
                                  <td className="border border-gray-300 p-2">6A MCB Type B</td>
                                  <td className="border border-gray-300 p-2">Max 10 light fittings per circuit</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-2">Socket Outlets</td>
                                  <td className="border border-gray-300 p-2">230V</td>
                                  <td className="border border-gray-300 p-2">2.5mm² Twin & Earth</td>
                                  <td className="border border-gray-300 p-2">20A MCB Type C</td>
                                  <td className="border border-gray-300 p-2">Ring circuit, max 100m²</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-2">A/C Unit</td>
                                  <td className="border border-gray-300 p-2">400V</td>
                                  <td className="border border-gray-300 p-2">4mm² SWA</td>
                                  <td className="border border-gray-300 p-2">32A MCB Type D</td>
                                  <td className="border border-gray-300 p-2">Dedicated 3-phase supply</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </WhitePaperContent>
                      </WhitePaperDocument>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <p className="mt-4">
                Thorough circuit design reduces operational issues, simplifies maintenance,
                and ensures regulatory compliance throughout the installation's lifecycle.
              </p>
            </div>
          </LessonContent>
          
          {/* Cable Selection Section */}
          <LessonContent title="Cable Selection and Sizing">
            <div className="space-y-6">
              <p>
                Cable selection involves careful consideration of multiple factors to ensure 
                safe current-carrying capacity and appropriate voltage drop characteristics.
              </p>
              
              <Accordion type="single" collapsible className="border-[#FFC900]/20">
                <AccordionItem value="cable-sizing" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Cable Sizing Factors
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Proper cable sizing is critical for safety and efficiency. Undersized cables can 
                        overheat and create fire hazards, while oversized cables waste resources.
                      </p>
                      
                      <h4 className="font-medium text-[#FFC900]">Current Rating Calculation</h4>
                      <p>
                        The basic current-carrying capacity (Iz) must be calculated using the design current (Ib)
                        and applying appropriate correction factors:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Design current (Ib) based on load requirements</li>
                        <li>Base current rating from Tables 4D1A to 4J4B in BS 7671</li>
                        <li>Application of correction factors (Ca, Cg, Ci, Ct)</li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Correction Factors</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Temperature (Ct)</span>: Adjust for ambient temperature 
                          (Tables 4B1 and 4B2 in BS 7671)
                        </li>
                        <li>
                          <span className="font-medium">Grouping (Cg)</span>: Account for heat buildup when 
                          multiple cables run together (Tables 4C1 to 4C5)
                        </li>
                        <li>
                          <span className="font-medium">Installation Method (Ci)</span>: Different methods affect 
                          heat dissipation (Tables 4A1 to 4A4)
                        </li>
                        <li>
                          <span className="font-medium">Thermal Insulation (Ca)</span>: Apply when cables are 
                          embedded in thermal insulation (Table 52.2)
                        </li>
                      </ul>
                      
                      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
                        <p className="text-[#FFC900] font-semibold">Cable Sizing Formula:</p>
                        <p className="text-[#FFC900]/80 mt-2">
                          I₂ ≥ I<sub>b</sub> / (C<sub>t</sub> × C<sub>g</sub> × C<sub>i</sub> × C<sub>a</sub>)
                        </p>
                        <p className="text-[#FFC900]/80 mt-2">
                          Where I₂ is the tabulated current-carrying capacity and I<sub>b</sub> is the design current.
                        </p>
                      </div>
                      
                      <h4 className="font-medium text-[#FFC900]">Voltage Drop Considerations</h4>
                      <p>
                        BS 7671 specifies maximum voltage drop limits from origin to load:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>3% of nominal voltage for lighting circuits (6.9V for 230V)</li>
                        <li>5% of nominal voltage for other circuits (11.5V for 230V)</li>
                        <li>Calculate using mV/A/m values from Tables 4D2A to 4J4B</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cable-routing" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Cable Routing Considerations
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Proper cable routing minimizes interference, ensures accessibility, and maintains
                        compliance with regulations.
                      </p>
                      
                      <h4 className="font-medium text-[#FFC900]">Separation Distances</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Minimum 300mm separation between power and data cables unless 
                          shielded or in metal conduit
                        </li>
                        <li>
                          Power and fire alarm cables should maintain 50mm separation
                        </li>
                        <li>
                          When crossing other services, do so at right angles
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Fire Barrier Penetration</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Use approved fire stopping systems rated for the specific barrier
                        </li>
                        <li>
                          Consider intumescent materials that expand under heat
                        </li>
                        <li>
                          Maintain documentation of all fire barrier penetrations
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Support Systems</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Cable trays</span>: Suitable for multiple cables, 
                          provide good ventilation
                        </li>
                        <li>
                          <span className="font-medium">Conduits</span>: Provide physical protection, 
                          40% maximum fill ratio
                        </li>
                        <li>
                          <span className="font-medium">Trunking</span>: Versatile for multiple services, 
                          45% maximum fill ratio
                        </li>
                        <li>
                          <span className="font-medium">Cable ladder</span>: For larger cables, can span 
                          greater distances between supports
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Bend Radius Limitations</h4>
                      <p>
                        Minimum internal bend radius to avoid cable damage:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Non-armored cables: 6 × overall diameter</li>
                        <li>Armored cables: 12 × overall diameter</li>
                        <li>Fiber optic cables: 10 × overall diameter</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="bs7671" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    BS 7671 Requirements
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        The IET Wiring Regulations BS 7671 provides specific requirements for cable selection.
                      </p>
                      
                      <h4 className="font-medium text-[#FFC900]">Section 523 - Current-Carrying Capacity</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Regulation 523.1 requires every conductor to have adequate current-carrying capacity
                        </li>
                        <li>
                          Tables 4D1A through 4J4B provide base current ratings for various cable types
                        </li>
                        <li>
                          Regulation 523.6 provides derating factors for cables in thermal insulation
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Section 525 - Voltage Drop</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Regulation 525.1 limits voltage drop between origin and load
                        </li>
                        <li>
                          Maximum 3% for lighting circuits and 5% for other circuits
                        </li>
                        <li>
                          Motor starting currents may require special consideration
                        </li>
                      </ul>
                      
                      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
                        <p className="text-[#FFC900] font-semibold">BS 7671 Example Calculation:</p>
                        <p className="text-[#FFC900]/80 mt-2">
                          For a 32A circuit supplying power outlets over 20m using 4mm² copper cable:
                        </p>
                        <p className="text-[#FFC900]/80 mt-2">
                          Voltage drop = 32A × 20m × 11mV/A/m ÷ 1000 = 7.04V (3.06%)
                        </p>
                        <p className="text-[#FFC900]/80 mt-2">
                          This is within the 5% limit for power circuits.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </LessonContent>
          
          {/* Equipment Selection Section */}
          <LessonContent title="Equipment Selection and Integration">
            <div className="space-y-6">
              <p>
                Proper selection of electrical equipment ensures compatibility, reliability, and compliance
                with project requirements and regulatory standards.
              </p>
              
              <Accordion type="single" collapsible className="border-[#FFC900]/20">
                <AccordionItem value="equipment-selection" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Equipment Selection Criteria
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Selecting appropriate equipment requires consideration of electrical, environmental,
                        and operational factors.
                      </p>
                      
                      <h4 className="font-medium text-[#FFC900]">Electrical Ratings</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Voltage rating</span>: Must match system voltage 
                          (230V, 400V, etc.) with appropriate tolerance
                        </li>
                        <li>
                          <span className="font-medium">Current rating</span>: Must exceed maximum load current 
                          with appropriate safety factor
                        </li>
                        <li>
                          <span className="font-medium">Breaking capacity</span>: For protective devices, 
                          must exceed prospective fault current
                        </li>
                        <li>
                          <span className="font-medium">Power factor</span>: Consider impact on system and 
                          need for correction
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Environmental Protection</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">IP ratings</span>: Select appropriate Ingress Protection 
                          rating based on environment:
                          <ul className="list-circle pl-6 mt-2 space-y-1">
                            <li>IP2X: Protected against solid objects {'>'}12.5mm</li>
                            <li>IP4X: Protected against solid objects {'>'}1.0mm</li>
                            <li>IP5X: Protected against dust</li>
                            <li>IP6X: Dust tight</li>
                            <li>IPX4: Protected against water splashing</li>
                            <li>IPX5: Protected against water jets</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">Temperature ratings</span>: Consider ambient temperature 
                          range and equipment heat dissipation
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Physical Considerations</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Dimensions</span>: Ensure adequate space for 
                          installation and maintenance access
                        </li>
                        <li>
                          <span className="font-medium">Weight</span>: Verify supporting structures are 
                          adequate for equipment load
                        </li>
                        <li>
                          <span className="font-medium">Mounting options</span>: Surface, flush, rack-mounted, 
                          floor-standing, etc.
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Regulatory Compliance</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">BS/EN standards</span>: Ensure equipment meets 
                          relevant product standards
                        </li>
                        <li>
                          <span className="font-medium">CE/UKCA marking</span>: Verify compliance with 
                          applicable directives
                        </li>
                        <li>
                          <span className="font-medium">Industry-specific requirements</span>: Consider 
                          special requirements for healthcare, hazardous areas, etc.
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="control-integration" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Control System Integration
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Modern electrical installations often incorporate control systems that must
                        be effectively integrated with power distribution.
                      </p>
                      
                      <h4 className="font-medium text-[#FFC900]">Control Hierarchy</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Level 0</span>: Field devices (sensors, actuators)
                        </li>
                        <li>
                          <span className="font-medium">Level 1</span>: Direct control (PLCs, controllers)
                        </li>
                        <li>
                          <span className="font-medium">Level 2</span>: Supervisory control (SCADA, BMS)
                        </li>
                        <li>
                          <span className="font-medium">Level 3</span>: Management systems (enterprise level)
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Communication Protocols</h4>
                      <p>
                        Select appropriate protocols based on application requirements:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Modbus</span>: Simple, robust, widely used for industrial control
                        </li>
                        <li>
                          <span className="font-medium">BACnet</span>: Common in building automation systems
                        </li>
                        <li>
                          <span className="font-medium">KNX</span>: European standard for home and building control
                        </li>
                        <li>
                          <span className="font-medium">DALI</span>: Specifically designed for lighting control
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">System Integration Considerations</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Power supply</span>: Separate control power from main power
                        </li>
                        <li>
                          <span className="font-medium">EMI/RFI protection</span>: Shield control cables from interference
                        </li>
                        <li>
                          <span className="font-medium">Redundancy</span>: Critical systems may require backup controls
                        </li>
                        <li>
                          <span className="font-medium">Network security</span>: Protect against unauthorized access
                        </li>
                      </ul>
                      
                      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
                        <p className="text-[#FFC900] font-semibold">Integration Best Practice:</p>
                        <p className="text-[#FFC900]/80 mt-2">
                          Use separate containment systems for power and control wiring, maintaining minimum 
                          separation distances based on voltage levels and cable shielding characteristics.
                          When control and power cables must cross, do so at right angles to minimize 
                          induced interference.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </LessonContent>
          
          {/* Protection Schemes Section */}
          <LessonContent title="Protection Schemes">
            <div className="space-y-6">
              <p>
                Protection schemes safeguard personnel, equipment, and property from electrical hazards
                through carefully coordinated protective devices.
              </p>
              
              <Accordion type="single" collapsible className="border-[#FFC900]/20">
                <AccordionItem value="overcurrent-protection" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Overcurrent Protection
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Overcurrent protection prevents damage from overloads and short circuits by
                        automatically disconnecting the supply when current exceeds safe levels.
                      </p>
                      
                      <h4 className="font-medium text-[#FFC900]">Protective Device Selection</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Fuses</span>: Simple, reliable, no moving parts; 
                          types include BS88 (HRC), BS1361, BS1362
                        </li>
                        <li>
                          <span className="font-medium">MCBs (Miniature Circuit Breakers)</span>: Resettable, 
                          consistent trip characteristics; types include:
                          <ul className="list-circle pl-6 mt-2 space-y-1">
                            <li>Type B: 3-5 × In (residential, general purpose)</li>
                            <li>Type C: 5-10 × In (commercial, light industrial)</li>
                            <li>Type D: 10-20 × In (industrial, high inrush current)</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">MCCBs (Molded Case Circuit Breakers)</span>: Higher 
                          ratings, adjustable settings, short-circuit protection
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Discrimination (Selectivity)</h4>
                      <p>
                        Discrimination ensures that only the protective device closest to a fault operates,
                        minimizing disruption to the rest of the system.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Current discrimination</span>: Based on current settings
                        </li>
                        <li>
                          <span className="font-medium">Time discrimination</span>: Based on time delay settings
                        </li>
                        <li>
                          <span className="font-medium">Zone discrimination</span>: Based on communication 
                          between devices
                        </li>
                        <li>
                          <span className="font-medium">Energy discrimination</span>: Based on let-through energy
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Short-Circuit Protection</h4>
                      <p>
                        All protective devices must have adequate breaking capacity for the prospective
                        fault current at their point of installation.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Calculate prospective fault current using supply impedance
                        </li>
                        <li>
                          Select devices with breaking capacity exceeding calculated value
                        </li>
                        <li>
                          Consider cascading arrangements for economical protection
                        </li>
                      </ul>
                      
                      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
                        <p className="text-[#FFC900] font-semibold">Protection Coordination Example:</p>
                        <p className="text-[#FFC900]/80 mt-2">
                          In a distribution system, main incoming device rated at 100A with time delay of 
                          100ms, submain devices at 63A with 50ms delay, and final circuit protection at 32A 
                          with instantaneous operation. This ensures that a fault in a final circuit will only 
                          trip the 32A device, maintaining supply to other circuits.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="shock-protection" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Electric Shock Protection
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Electric shock protection combines basic protection against direct contact
                        and fault protection against indirect contact.
                      </p>
                      
                      <h4 className="font-medium text-[#FFC900]">Earthing Systems</h4>
                      <p>
                        BS 7671 recognizes several earthing system arrangements:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">TN-S</span>: Separate neutral and protective conductors 
                          throughout the system
                        </li>
                        <li>
                          <span className="font-medium">TN-C-S (PME)</span>: Combined neutral and protective conductors 
                          in part of the system
                        </li>
                        <li>
                          <span className="font-medium">TT</span>: Supply source earthed, exposed conductive parts 
                          connected to independent earth
                        </li>
                        <li>
                          <span className="font-medium">IT</span>: Supply source isolated from earth or impedance 
                          earthed, exposed conductive parts earthed
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Protective Bonding</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Main equipotential bonding</span>: Connect main 
                          earthing terminal to:
                          <ul className="list-circle pl-6 mt-2 space-y-1">
                            <li>Water service pipes</li>
                            <li>Gas installation pipes</li>
                            <li>Structural metalwork</li>
                            <li>Central heating and AC systems</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">Supplementary bonding</span>: Local bonding within 
                          special locations (e.g., bathrooms)
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">RCD Protection</h4>
                      <p>
                        Residual Current Devices provide additional protection against electric shock:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          30mA RCDs required for socket outlets accessible to ordinary persons
                        </li>
                        <li>
                          30mA RCDs required for all circuits in bathrooms
                        </li>
                        <li>
                          300mA RCDs often used for fire protection in larger installations
                        </li>
                        <li>
                          100-300mA RCDs used for equipment protection in industrial applications
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Earth Fault Loop Impedance</h4>
                      <p>
                        Maximum earth fault loop impedance (Zs) must be low enough to ensure 
                        protective devices operate within required time:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          0.4 seconds for circuits up to 32A in TN systems
                        </li>
                        <li>
                          5.0 seconds for distribution circuits in TN systems
                        </li>
                        <li>
                          Values tabulated in BS 7671 Chapter 41
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="special-protections" className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#FFC900] py-4">
                    Special Protections
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80 pt-2 pb-4">
                    <div className="space-y-4">
                      <p>
                        Beyond basic overcurrent and shock protection, modern installations often
                        require additional specialized protection measures.
                      </p>
                      
                      <h4 className="font-medium text-[#FFC900]">Surge Protection</h4>
                      <p>
                        Surge Protection Devices (SPDs) protect against transient overvoltages:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Type 1 SPDs</span>: For direct lightning strikes, 
                          installed at main distribution board
                        </li>
                        <li>
                          <span className="font-medium">Type 2 SPDs</span>: For indirect strikes and switching 
                          surges, installed at sub-distribution boards
                        </li>
                        <li>
                          <span className="font-medium">Type 3 SPDs</span>: For local protection of sensitive 
                          equipment, installed near equipment
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Arc Fault Detection</h4>
                      <p>
                        Arc Fault Detection Devices (AFDDs) detect and disconnect dangerous arcing faults:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Recommended for circuits in wooden buildings and structures
                        </li>
                        <li>
                          Useful in locations with sleeping accommodation
                        </li>
                        <li>
                          Beneficial for circuits with high fire risk
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Lightning Protection</h4>
                      <p>
                        Lightning protection systems should be integrated with electrical installations:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Coordinated with surge protection measures
                        </li>
                        <li>
                          Separate lightning down conductors from electrical cables
                        </li>
                        <li>
                          Connect to separate earth termination system where possible
                        </li>
                      </ul>
                      
                      <h4 className="font-medium text-[#FFC900]">Emergency Shutdown Systems</h4>
                      <p>
                        Emergency shutdown facilities may be required for:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Fire safety systems (complying with BS 5839)
                        </li>
                        <li>
                          Emergency lighting systems (complying with BS 5266)
                        </li>
                        <li>
                          Industrial machinery (complying with BS EN 60204)
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </LessonContent>
          
          {/* Review and Assessment Section */}
          <LessonContent title="Review and Knowledge Check">
            <div className="space-y-6">
              <p>
                Let's review the key concepts covered in this technical design considerations module:
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Points Summary</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Circuit design begins with comprehensive load analysis and strategic circuit arrangement</li>
                <li>Cable selection must account for current capacity, voltage drop, and installation conditions</li>
                <li>Equipment selection criteria include electrical ratings, environmental protection, and regulatory compliance</li>
                <li>Protection schemes must coordinate overcurrent protection, shock protection, and specialized protections</li>
                <li>All designs must comply with BS 7671 and other relevant standards</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Self-Assessment Questions</h3>
              <div className="space-y-4">
                <div className="bg-[#1a1d17] p-4 rounded-md">
                  <p className="text-[#FFC900] font-semibold">Question 1:</p>
                  <p className="text-[#FFC900]/80 mt-2">
                    When calculating the maximum demand of an installation, which of the following factors is applied to account for the non-simultaneous operation of connected loads?
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
                    <li>Correction factor</li>
                    <li>Diversity factor</li>
                    <li>Power factor</li>
                    <li>Utilization factor</li>
                  </ul>
                  <p className="text-[#FFC900]/80 mt-4 italic">
                    Answer: Diversity factor
                  </p>
                </div>
                
                <div className="bg-[#1a1d17] p-4 rounded-md">
                  <p className="text-[#FFC900] font-semibold">Question 2:</p>
                  <p className="text-[#FFC900]/80 mt-2">
                    What is the maximum permitted voltage drop for a lighting circuit according to BS 7671?
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
                    <li>2% of nominal voltage</li>
                    <li>3% of nominal voltage</li>
                    <li>5% of nominal voltage</li>
                    <li>8% of nominal voltage</li>
                  </ul>
                  <p className="text-[#FFC900]/80 mt-4 italic">
                    Answer: 3% of nominal voltage
                  </p>
                </div>
                
                <div className="bg-[#1a1d17] p-4 rounded-md">
                  <p className="text-[#FFC900] font-semibold">Question 3:</p>
                  <p className="text-[#FFC900]/80 mt-2">
                    Which type of MCB would be most appropriate for a circuit supplying motors with high inrush currents?
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
                    <li>Type B</li>
                    <li>Type C</li>
                    <li>Type D</li>
                    <li>Type A</li>
                  </ul>
                  <p className="text-[#FFC900]/80 mt-4 italic">
                    Answer: Type D
                  </p>
                </div>
              </div>
              
              <div className="bg-[#1a1d17] p-4 rounded-md mt-6">
                <p className="text-[#FFC900] font-semibold">Next Steps:</p>
                <p className="text-[#FFC900]/80 mt-2">
                  After mastering the technical design considerations presented in this module, 
                  continue to the Implementation module to learn about the practical aspects of 
                  executing these designs in real-world electrical installations.
                </p>
                <div className="mt-4 flex justify-end">
                  <button 
                    onClick={() => navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning/implementation')} 
                    className="px-4 py-2 bg-[#FFC900] text-black rounded hover:bg-[#e5b700] transition-colors"
                  >
                    <List className="h-4 w-4 mr-2 inline-block" />
                    Continue to Implementation
                  </button>
                </div>
              </div>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalDesignPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const SemiconductorBasicsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Semiconductor Basics"
          description="Understanding the foundational concepts of semiconductor materials and devices"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Semiconductor Materials">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Intrinsic and Extrinsic Semiconductors</h3>
              <p className="text-[#FFC900]/80">
                Semiconductors are materials with electrical conductivity between conductors and insulators. Silicon and germanium are the most common semiconductor materials used in electronics.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Intrinsic semiconductors:</strong> Pure semiconductor materials with equal numbers of electrons and holes.</li>
                <li><strong>Extrinsic semiconductors:</strong> Doped materials with impurities added to change their electrical properties.
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>N-type:</strong> Doped with donor impurities (phosphorus, arsenic) to increase free electrons.</li>
                    <li><strong>P-type:</strong> Doped with acceptor impurities (boron, gallium) to increase holes.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="P-N Junctions">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Junction Theory</h3>
              <p className="text-[#FFC900]/80">
                A P-N junction is formed when P-type and N-type semiconductors are joined together, creating a boundary with special electrical properties.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Depletion region:</strong> Area at the junction where free carriers diffuse and recombine, creating a region with few mobile charge carriers.</li>
                <li><strong>Potential barrier:</strong> Electric field created across the depletion region that prevents further diffusion of majority carriers.</li>
                <li><strong>Forward bias:</strong> Voltage applied to reduce the potential barrier, allowing significant current flow.</li>
                <li><strong>Reverse bias:</strong> Voltage applied to increase the potential barrier, allowing minimal current flow except for leakage current.</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Diodes">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Diode Types and Applications</h3>
              <p className="text-[#FFC900]/80">
                Diodes are two-terminal semiconductor devices that allow current flow in one direction only.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Signal diodes:</strong> Used in low-power applications for signal processing.</li>
                <li><strong>Power diodes:</strong> Handle higher voltages and currents, used in power supplies.</li>
                <li><strong>Zener diodes:</strong> Operate in reverse breakdown for voltage regulation.</li>
                <li><strong>Light-emitting diodes (LEDs):</strong> Convert electrical energy to light.</li>
                <li><strong>Photodiodes:</strong> Convert light to electrical current.</li>
                <li><strong>Schottky diodes:</strong> Metal-semiconductor junction with fast switching and low forward voltage drop.</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Transistors">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Bipolar Junction Transistors (BJTs)</h3>
              <p className="text-[#FFC900]/80">
                BJTs are three-terminal semiconductor devices used for amplification and switching.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>NPN transistor:</strong> Two N-type regions separated by a P-type region.</li>
                <li><strong>PNP transistor:</strong> Two P-type regions separated by an N-type region.</li>
                <li><strong>Operating regions:</strong> Active (amplification), Saturation (fully ON), Cut-off (fully OFF).</li>
                <li><strong>Common configurations:</strong> Common Emitter, Common Base, Common Collector.</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Field Effect Transistors (FETs)</h3>
              <p className="text-[#FFC900]/80">
                FETs are voltage-controlled devices that use an electric field to control current flow.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>JFET (Junction FET):</strong> Uses a reverse-biased P-N junction to control channel width.</li>
                <li><strong>MOSFET (Metal-Oxide-Semiconductor FET):</strong> Uses an insulated gate to control channel conductivity.
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>Enhancement mode:</strong> Channel must be created by applying gate voltage.</li>
                    <li><strong>Depletion mode:</strong> Channel exists by default and is narrowed by gate voltage.</li>
                  </ul>
                </li>
                <li><strong>Advantages over BJTs:</strong> Higher input impedance, simpler biasing, lower power consumption.</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SemiconductorBasicsPage;

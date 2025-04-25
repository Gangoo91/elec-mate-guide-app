
import { UnitContent } from './interfaces';

export const unit303: UnitContent = {
  title: "Electrical Installations: Fault Diagnosis and Rectification",
  description: "Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures.",
  sections: [
    {
      title: "Fault Diagnosis Techniques",
      content: (
        <div className="space-y-4">
          <p>Learn effective fault diagnosis approaches:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Systematic troubleshooting methods</li>
            <li>Using test equipment effectively</li>
            <li>Interpreting test results</li>
            <li>Documentation of fault findings</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Common Electrical Faults",
      content: (
        <div className="space-y-4">
          <p>Understanding and identifying common electrical issues:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Open circuit conditions</li>
            <li>Short circuits and earth faults</li>
            <li>High resistance connections</li>
            <li>Intermittent faults</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Fault Rectification Procedures",
      content: (
        <div className="space-y-4">
          <p>Safe and effective fault correction methods:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Isolation and lock-off procedures</li>
            <li>Component replacement techniques</li>
            <li>System restoration</li>
            <li>Post-repair testing</li>
          </ul>
        </div>
      ),
    }
  ],
};

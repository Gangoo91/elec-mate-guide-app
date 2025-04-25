
import { UnitContent } from './interfaces';

export const unit308: UnitContent = {
  title: "Career Awareness in Building Services Engineering",
  description: "Explore career opportunities and professional development in electrical engineering.",
  sections: [
    {
      title: "Career Pathways",
      content: (
        <div className="space-y-4">
          <p>Exploring progression routes within electrical engineering:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Specialist electrical roles</li>
            <li>Management positions</li>
            <li>Consulting opportunities</li>
            <li>Self-employment options</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Professional Development",
      content: (
        <div className="space-y-4">
          <p>Ongoing learning and qualification opportunities:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Continuing professional development</li>
            <li>Advanced qualifications</li>
            <li>Professional body membership</li>
            <li>Industry certifications</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Industry Awareness",
      content: (
        <div className="space-y-4">
          <p>Understanding the broader building services industry:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Current industry trends</li>
            <li>Technological developments</li>
            <li>Regulatory changes</li>
            <li>Sustainable practices</li>
          </ul>
        </div>
      ),
    }
  ],
};

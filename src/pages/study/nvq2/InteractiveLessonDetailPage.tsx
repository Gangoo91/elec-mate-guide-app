
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LESSON_DATA: any = {
  "basic-circuit-theory": {
    title: "Basic Circuit Theory",
    description: "Simulate and explore basic electrical circuits with real-time feedback.",
    activity: (
      <>
        <div className="mb-6">
          <p className="text-[#FFC900]/80 mb-2">
            Try this activity: Switch the lamp circuit on and off, and see how current changes!
          </p>
          <img
            src="/photo-1486312338219-ce68d2c6f44d"
            alt="Basic circuit"
            className="rounded-lg w-full max-w-xs mx-auto mb-3 shadow"
          />
        </div>
        <Card className="bg-[#1A1F2C] border-none mb-3">
          <CardContent>
            <strong className="text-[#FFC900]">Interactive Q:</strong>{" "}
            <span className="text-[#FFC900]/80">What happens if you connect a lamp in series with a battery? Try drawing the circuit below or explain in your own words.</span>
          </CardContent>
        </Card>
        <Button className="w-full mt-4" onClick={() => alert("This is where interactive simulation would go!")}>
          Toggle Lamp (Demo)
        </Button>
      </>
    )
  },
  "cable-installation": {
    title: "Cable Installation",
    description: "Learn best practices for installing cables safely and efficiently.",
    activity: (
      <>
        <div className="mb-4">
          <p className="text-[#FFC900]/80 mb-2">
            Activity: Watch the short animation, then list 2 things you should check before installing any cable.
          </p>
          <video
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            controls
            className="w-full max-w-md mx-auto mb-3 rounded-lg shadow"
          />
        </div>
        <Card className="bg-[#1A1F2C] border-none mb-3">
          <CardContent>
            <strong className="text-[#FFC900]">Your Task:</strong>{" "}
            <span className="text-[#FFC900]/80">
              What would you do first on a real site before pulling a cable? (E.g., PPE, check route, check for hazards...)
            </span>
          </CardContent>
        </Card>
        <Button className="w-full mt-4" onClick={() => alert("In the future, activities will be interactive!")}>
          Mark as Complete
        </Button>
      </>
    )
  },
  "testing-and-inspection": {
    title: "Testing and Inspection",
    description: "An interactive look at basic electrical installation testing—see the results instantly!",
    activity: (
      <>
        <div className="mb-4">
          <p className="text-[#FFC900]/80 mb-2">Try answering:</p>
          <Card className="bg-[#22251e] border-none mb-4">
            <CardContent>
              <strong className="text-[#FFC900]">Which tool is used for checking if a circuit is live?</strong>
              <ul className="list-disc text-[#FFC900]/90 ml-7 mt-2">
                <li>Hammer</li>
                <li>Multimeter</li>
                <li>Paintbrush</li>
              </ul>
              <Button className="mt-2" variant="secondary" onClick={() => alert("Correct! A multimeter.")}>
                Select 'Multimeter'
              </Button>
            </CardContent>
          </Card>
          <p className="text-[#FFC900]/70">After testing, always record your results and check for safety.</p>
        </div>
      </>
    )
  }
};

const InteractiveLessonDetailPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? LESSON_DATA[lessonId] : null;
  const navigate = useNavigate();

  if (!lesson) {
    return (
      <div className="my-24 text-center text-[#FFC900]/80">
        <h3 className="text-xl">Lesson not found!</h3>
        <Button className="mt-6" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-2xl mx-auto pb-16">
      <PageHeader
        title={lesson.title}
        description={lesson.description}
        hideBackButton={false}
      />
      <div className="animate-fade-in mt-6">{lesson.activity}</div>
    </div>
  );
};

export default InteractiveLessonDetailPage;

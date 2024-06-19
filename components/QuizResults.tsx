import Link from "next/link";
import { Button } from '@/components/ui/button';

const ready = 13;
const almost = 20;
const needMore = 28;

interface QuizResultsProps {
  score: number | null;
//   elapsedTime: number | null;
}

const QuizResults: React.FC<QuizResultsProps> = ({ score }) => {
  let title, subtitle, message, readynessScore, followup;
  if (score === null || score < ready) {
    title = "Ready for Digital Signage";
    subtitle = "You are ready to install digital signage in your business!";
    message =
      "You have the digital content, technical infrastructure, and strategic vision to make the most of this technology. Contact us for a special offer to get started.";
    readynessScore = "100%";
    followup =
      "Send a tailored offer for digital signage installation, including discounts or special packages.";
  } else if (score >= almost && score < needMore) {
    title = "Almost there!";
    subtitle =
      "You are almost ready to install digital signage in your business!";
    message =
      "You have some of the necessary components, but there are a few areas to improve. Focus on enhancing your digital content quality, allocating a dedicated budget, and familiarizing yourself with content management systems. We can help you with these preparations.";
    readynessScore = "80%";
    followup =
      "Provide resources and guidance on improving digital content, budgeting, and technical setup.";
  } else {
    title = "Need more Preparation";
    subtitle =
      "You need more preparation before you can install digital signage in your business.";
    message =
      "Focus on creating a digital marketing strategy, improving your content quality, and ensuring you have the necessary technical infrastructure and budget. We can provide resources and support to help you get ready.";
    readynessScore = "60%";
    followup =
      "Offer educational materials, webinars, or consultations to help businesses prepare for digital signage.";
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen text-center py-36">
      <div>
      {/* <p className="text-2xl mb-24">{elapsedTime}</p> */}
        <h1 className="text-4xl mb-4">Quiz Completed</h1>
        <p className="text-3xl mb-12">Your score: {readynessScore}</p>
        <p className="text-6xl mb-4">{title}</p>
        <p className="text-2xl mb-24">{subtitle}</p>
      </div>
      <p className="text-2xl mb-12 w-3/4">{message}</p>
      <p className="">Follow up: {followup}</p>
      <div className="flex gap-4">
        <Button className="hover:bg-foreground hover:text-background" variant="outline"><Link href="/">Email me the Guide!</Link></Button>
      </div>
      
    </div>
  );
};

export default QuizResults;

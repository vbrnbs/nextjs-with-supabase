import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface QuizAlertProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: () => void;

}
  
const QuizAlert: React.FC<QuizAlertProps> = ({email, setEmail, handleSubmit}) => {
  return (
    <div className="mx-2 relative">
          <AlertDialog defaultOpen>
            <AlertDialogContent>
            <div className="w-1">
              <AlertDialogCancel><button className="text-xs -translate-x-4 " onClick={handleSubmit}>x</button></AlertDialogCancel>
            </div>
              <AlertDialogHeader>
                <AlertDialogTitle>Get your results!</AlertDialogTitle>
                <AlertDialogDescription>
                  Just add your email here.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Input
                  type="email"
                  placeholder="your favourite email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="order-1 md:order-none mb-3 md:mb-0"
                />
                <AlertDialogAction>
                  <Button onClick={handleSubmit}>Submit</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
    </div>
  )
}

export default QuizAlert

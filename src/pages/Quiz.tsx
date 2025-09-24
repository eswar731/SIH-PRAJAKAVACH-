import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Brain, 
  Clock, 
  Trophy, 
  CheckCircle,
  XCircle,
  RefreshCw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const quizData = {
    title: "Earthquake Safety Quiz",
    description: "Test your knowledge about earthquake preparedness",
    totalQuestions: 5,
    timeLimit: "5 minutes",
    questions: [
      {
        question: "What is the first thing you should do when you feel an earthquake?",
        options: [
          "Run outside immediately",
          "Drop, Cover, and Hold On",
          "Stand in a doorway",
          "Call for help"
        ],
        correct: 1,
        explanation: "Drop, Cover, and Hold On is the internationally recommended response to earthquakes."
      },
      {
        question: "Where is the safest place to be during an earthquake in a classroom?",
        options: [
          "Near windows",
          "Under a strong desk or table",
          "Against an exterior wall",
          "In the center of the room"
        ],
        correct: 1,
        explanation: "Under a strong desk or table provides protection from falling objects."
      },
      {
        question: "How long should you stay in the 'Drop, Cover, Hold On' position?",
        options: [
          "Until the shaking stops",
          "For exactly 30 seconds",
          "Until someone tells you to move",
          "For 1 minute"
        ],
        correct: 0,
        explanation: "You should maintain the position until the shaking completely stops."
      },
      {
        question: "What should you NOT do during an earthquake?",
        options: [
          "Stay calm",
          "Protect your head and neck",
          "Run outside during shaking",
          "Get under sturdy furniture"
        ],
        correct: 2,
        explanation: "Running outside during shaking increases the risk of injury from falling debris."
      },
      {
        question: "After an earthquake stops, what should be your first priority?",
        options: [
          "Check social media",
          "Look for injuries and hazards",
          "Take photos of damage",
          "Call friends and family"
        ],
        correct: 1,
        explanation: "Checking for injuries and immediate hazards ensures safety before other actions."
      }
    ]
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === quizData.questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
      // Show toast with final score
      const finalScore = selectedAnswer === quizData.questions[currentQuestion].correct ? score + 1 : score;
      const percentage = Math.round((finalScore / quizData.questions.length) * 100);
      toast({
        title: "Quiz Completed!",
        description: `You scored ${percentage}%`,
      });
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-success-green";
    if (percentage >= 60) return "text-emergency-orange";
    return "text-emergency-red";
  };

  const getScoreBadge = (percentage: number) => {
    if (percentage >= 80) return "Expert";
    if (percentage >= 60) return "Good";
    return "Needs Practice";
  };

  if (showResult) {
    const percentage = Math.round((score / quizData.questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-safety">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-elevated">
              <CardHeader className="text-center">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-emergency-orange" />
                <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
                <CardDescription>Here's how you performed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className={`text-6xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                    {percentage}%
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {getScoreBadge(percentage)}
                  </Badge>
                  <p className="text-muted-foreground mt-2">
                    You got {score} out of {quizData.questions.length} questions correct
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Review Your Answers:</h3>
                  {quizData.questions.map((question, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      {answers[index] === question.correct ? (
                        <CheckCircle className="w-5 h-5 text-success-green" />
                      ) : (
                        <XCircle className="w-5 h-5 text-emergency-red" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-medium">Question {index + 1}</p>
                        <p className="text-xs text-muted-foreground">
                          {answers[index] === question.correct ? "Correct" : "Incorrect"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button onClick={restartQuiz} className="flex-1">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Link to="/dashboard" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Back to Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Link to="/dashboard">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>

          {/* Quiz Header */}
          <Card className="mb-6 shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Brain className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>{quizData.title}</CardTitle>
                    <CardDescription>{quizData.description}</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {quizData.timeLimit}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {quizData.totalQuestions}
                  </div>
                </div>
              </div>
              <Progress value={progress} className="mt-4" />
            </CardHeader>
          </Card>

          {/* Question Card */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="text-lg">
                {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className="w-full justify-start text-left p-4 h-auto"
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground'
                    }`}>
                      <span className="text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span>{option}</span>
                  </div>
                </Button>
              ))}

              <div className="flex justify-between items-center pt-4">
                <div className="text-sm text-muted-foreground">
                  Select an answer to continue
                </div>
                <Button 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  className="bg-gradient-safety"
                >
                  {currentQuestion + 1 === quizData.questions.length ? "Finish Quiz" : "Next Question"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
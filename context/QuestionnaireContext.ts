import { createContext } from "react";

// QuestionnaireContext context
const QuestionnaireContext = createContext({
  questionnaireData: [],
  setQuestionnaireData: (questionnaireData: any) => {
    questionnaireData;
  },
});

export default QuestionnaireContext;

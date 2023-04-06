export const BASE_URL = "https://development-core.herokuapp.com/";
export const QUESTION_TYPES = {
  MULTIPLE_CHOICE: "multi",
  SINGLE_CHOICE: "single",
  RANGE: "range",
  INPUT: "input",
};


export  interface Question {
  question: string;
  type:string;
  options:string[],
  answers:any,
  loading:boolean,
  loadingTextTitle:any,
  loadingText:any,
}
export  interface CreateQuestionLoadingDataInterFace {
  loadingTextTitle:any,
  loadingText:any,
}
export const createQuestionLoadingData:  Array<CreateQuestionLoadingDataInterFace> = [
  {loadingTextTitle:"Analyzing your input",loadingText:"Pain creams have less absorption into the blood stream. This significantly reduces the chances for development of side effects such as stomach upset and ulcers that commonly occur with long-term use of oral pain medications."},
  {loadingTextTitle:"Scanning database",loadingText:"Our pain formulas contain multiple agents that synergistically work together to target against a variety of different pain receptors."},
  {loadingTextTitle:"Your formula is ready",loadingText:"If chronic pain is inadequately treated, people often suffer from symptoms such as anxiety, fear, depression, sleeplessness and impairment of social interaction."}
];


export const MAPPING = {
"All the time": 1,
"Once in a while":2,
"Comes and goes":3,
"Days":1,
"Months":2,
"Years":3,
"Yes":true,
"No" :false,
"0":1,
"25":2,
"50":3,
"75":4,
"100":5
 };


export const questions:  Array<Question> = [
  {
    question: "Describe your pain ",
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    options: [
      "sharp",
      "dull",
      "twisting",
      "stretching",
      "hot",
      "tingling",
      "stinging",
      "intense",
      "radiating",
      "piercing",
      "numbing",
      "cold",
      "freezing",
      "nagging",
      "nauseating",
      "nawing",
      "pinching",
      "shooting",
      "stabbing",
      "throbbing",
    ],
    answers: null,
    loading:false,
    loadingTextTitle:'Getting Started',
    loadingText:"Over 50 million people (20%) in the United States suffer from chronic pain - that is 1 in 5 Americans",
  },
  {
    question: "Where is your pain located?",
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    options: [
      "back",
      "feet",
      "arms",
      "legs",
      "head/Neck",
      "stomach",
      "fingers/Toes",
      "wrist/Ankles",
      "knees",
      "other",
    ],
    answers: null,
    loading:false,
    loadingTextTitle:"You are doing good",
    loadingText:"Chronic pain causes $80 billion in lost wages every year"
  },
  {
    question: "Does your pain radiate or feel like it moves around?",
    type: QUESTION_TYPES.SINGLE_CHOICE,
    options: ["Yes", "No"],
    answers: null,
    loading:false,
    loadingTextTitle:"Almost there",
    loadingText:"Chronic pain is the No. 1 reason why patients see a doctor"
  },
  {
    question: "What kind of things increase your pain?",
    type: QUESTION_TYPES.INPUT,
    options: [],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "What kind of things relieve your pain?",
    type: QUESTION_TYPES.INPUT,
    options: [],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "How severe is the pain, Right now?",
    type: QUESTION_TYPES.RANGE,
    options: ["Mid", "Extreme"],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "How severe is the pain when it is at its worst?",
    type: QUESTION_TYPES.RANGE,
    options: [],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "How severe is the pain when it is at its least?",
    type: QUESTION_TYPES.RANGE,
    options: ["Mid", "Extreme"],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "How often do you feel the pain?",
    type: QUESTION_TYPES.SINGLE_CHOICE,
    options: ["All the time", "Once in a while", "Comes and goes"],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "How long have you been experiencing this pain?",
    type: QUESTION_TYPES.SINGLE_CHOICE,
    options: ["Days", "Months", "Years"],
    answers: null,
     loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question:
      "Have you taken any prescription or over the counter medications to manage your pain?",
    type: QUESTION_TYPES.INPUT,
    options: [],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question:
      "Do you have any known allergies or sensitivities to medications?",
    type: QUESTION_TYPES.INPUT,
    options: [],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "Have you had any surgeries or hospitalizations?",
    type: QUESTION_TYPES.INPUT,
    options: [],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "Are you currently on any medications, herbals or supplements?",
    type: QUESTION_TYPES.INPUT,
    options: [],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
  {
    question: "Are you diagnosed with any of the following?",
    type: QUESTION_TYPES.SINGLE_CHOICE,
    options: [
      "Diabetes",
      "Prostate",
      "Kidney",
      "Liver",
      "Nerve",
      "Eye",
      "Blood Conditions",
      "Heart Conditions",
      "Blood Pressure",
      "HIV",
    ],
    answers: null,
    loading:false,
    loadingTextTitle:null,
    loadingText:null
  },
];

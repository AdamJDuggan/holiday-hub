import SurveyOption from "../../models/SurveyOption";
import SurveyModel from "../../models/Survey.tsx";

const authId = "user4";

const optionOne = {
  id: "option1",
  start: new Date("August 3, 2024 11:00"),
  end: new Date("August 10, 2024 11:00"),
  description: "This is our prefered option",
  accept: ["user1", "user4"],
  decline: ["user2"],
};
const optionTwo = {
  id: "option2",
  title: "Option 2",
  start: new Date("August 10, 2024 11:00"),
  end: new Date("August 17, 2024 11:00"),
  accept: ["user1", "user2"],
  decline: ["user4"],
};

interface Member {
  id: string;
  name: string;
}

const options: SurveyOption[] = [
  optionOne,
  optionTwo,
  {
    ...optionTwo,
    id: "option3",
    accept: ["user1", "user2", "user4"],
    decline: [],
    title: "Option 3",
  },
];

const members: Member[] = [
  { id: "user1", name: "Sharon & Brian" },
  { id: "user2", name: "Laura" },
  { id: "user4", name: "Siobhan & Dan" },
  { id: "user3", name: "The Duggan's" },
];

const survey: SurveyModel = {
  title: "Spain 2024",
  options: [
    {
      id: "option1",
      start: new Date("August 3, 2024 11:00"),
      end: new Date("August 10, 2024 11:00"),
      description: "This is our prefered option",
      accept: ["user1", "user4"],
      decline: ["user2"],
    },
    {
      id: "option2",
      //   title: "Option 2",
      start: new Date("August 10, 2024 11:00"),
      end: new Date("August 17, 2024 11:00"),
      accept: ["user1", "user2"],
      decline: ["user4"],
    },
    {
      id: "option3",
      start: new Date("August 16, 2024 11:00"),
      end: new Date("August 21, 2024 11:00"),
      accept: ["user1", "user2"],
      decline: ["user4"],
    },
  ],
  members,
};

export default survey;

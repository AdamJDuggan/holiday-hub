// 3rd party
import classnames from "classnames";
// Models
import SurveyOption from "../../models/SurveyOption";
// Styles
import styles from "./index.module.scss";

const optionOne = {
  id: "option1",
  start: new Date(),
  end: new Date("June 20, 2023 11:00"),
  description: "This is our prefered option",
  accept: ["user1"],
};
const optionTwo = {
  id: "option2",
  title: "Option 2",
  start: new Date(),
  end: new Date("June 20, 2023 11:00"),
  accept: ["user1", "user2"],
};

interface Member {
  id: string;
  name: string;
}
interface Option {
  id: string;
  title?: string;
  start?: Date;
  end?: Date;
  description?: string;
  accept: string[];
}

interface Survey {
  // Hub id
  hub: string;
  // User ids of group members who can control the survey
  admin: string[];
  options: Option[];
}

interface Hub {
  id: string;
  admins: string[];
  members: Member[];
  surverys: Survey[];
}

const options: Option[] = [optionOne, optionTwo];

const members: Member[] = [
  { id: "user1", name: "Karin" },
  { id: "user2", name: "ChunLi" },
];

const classes = [];

export default function Survey() {
  return (
    <div className="grid place-items-center">
      <div className="container">
        <table>
          <th>
            <tr>
              <th>Member</th>
              {options.map((option) => (
                <th key={option.id}>{option.title || "Date"}</th>
              ))}
            </tr>
          </th>
          <tb></tb>
        </table>
      </div>
    </div>
  );
}

// 3rd party
import classnames from "classnames";
// Models
import SurveyOption from "../../models/SurveyOption.tsx";
import SurveyModel from "../../models/Survey.tsx";
// Components
import DateCard from "../DateCard";
import Icon from "../Icon";
// Utils
import displayDate from "../../utils/formatDate.tsx";
// Styles
import styles from "./style.scss";

const classes = classnames(styles, "table");

const authId = "user4";

interface SurveyProps {
  survey: SurveyModel;
}

export default function Survey(props: SurveyProps) {
  const { survey } = props;
  return (
    <div className="grid place-items-center overflow-scroll">
      <div className="container ">
        <h2>Spain 2024</h2>
        <table className={classes}>
          <thead>
            <th></th>
            {survey.options.map((option: SurveyOption) => (
              <th className="border" key={option.id}>
                {option.title || (
                  <DateCard date={option.start} endDate={option.end} />
                )}
              </th>
            ))}
          </thead>

          <tbody>
            {survey.members
              .filter((member) => member.id !== authId)
              .map((member) => {
                return (
                  <tr>
                    <th className="text-start border">{member.name}</th>
                    {survey.options.map((option: SurveyOption) => {
                      const accepted = option.accept.includes(member.id);
                      const declined = option.decline.includes(member.id);
                      return (
                        <th
                          key={option.id}
                          className={classnames(
                            "border",
                            accepted && "bg-green-100",
                            declined && "bg-red-100"
                          )}
                        >
                          {authId === member.id ? (
                            <input
                              type="checkbox"
                              className="border-gray-300 rounded bg-red-200"
                            />
                          ) : (
                            <Icon
                              icon={accepted ? "tick" : declined ? "cross" : ""}
                              className={classnames(
                                accepted && "text-green-800",
                                declined && "text-red-800"
                              )}
                            />
                          )}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            <tr className="bg-white">
              <th className="border text-start">Adam & Maria</th>
              {survey.options.map((option: SurveyOption) => {
                const accepted = option.accept.includes("user4");
                const declined = option.decline.includes("user4");
                return (
                  <th className="border" key={option.id}>
                    {authId === "user4" ? (
                      <input
                        type="checkbox"
                        className="border-gray-300 rounded bg-red-200"
                      />
                    ) : (
                      <Icon
                        icon={accepted ? "tick" : declined ? "cross" : ""}
                        className={classnames(
                          accepted && "text-green-800",
                          declined && "text-red-800"
                        )}
                      />
                    )}
                  </th>
                );
              })}
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              {survey.options.map((option: SurveyOption) => (
                <th className="border">
                  {option.accept.length} / {survey.members.length}
                </th>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

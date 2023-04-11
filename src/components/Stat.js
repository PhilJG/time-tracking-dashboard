import data from '../data.json'

import { ReactComponent as Ellipsis } from "../icons/icon-ellipsis.svg";
import { ReactComponent as Exercise } from "../icons/icon-exercise.svg";
import { ReactComponent as Play } from "../icons/icon-play.svg";
import { ReactComponent as SelfCare } from "../icons/icon-self-care.svg";
import { ReactComponent as Social } from "../icons/icon-social.svg";
import { ReactComponent as Study } from "../icons/icon-study.svg";
import { ReactComponent as Work } from "../icons/icon-work.svg";

const iconsMap = {
    Ellipsis: <Ellipsis />,
    Exercise: <Exercise />,
    Play: <Play />,
    SelfCare: <SelfCare />,
    Social: <Social />,
    Study: <Study />,
    Work: <Work />,
};

export default function Stat({ recurrance, Icon }) {

    const setRText = function () {
        if (recurrance === 'daily') {
            return 'Yesterday'
        } else if (recurrance === 'weekly') {
            return 'Last week'
        } else if (recurrance === 'monthly') {
            return 'Last month'
        }
    }

    const statDetails = data.map(detail => {
        // Use the "title" property from data.json to find the corresponding icon component
        const Icon = iconsMap[detail.title];


        // Render the icon component as an <img> element with an "alt" attribute
        return (
            <div title={detail.title} className={`container-tab ${detail.title.toLowerCase()}`}>
                {Icon}
                <section className="section-stats flex">
                    <div className="current-stat">
                        <h1>{detail.title}</h1>
                        <h1>Current {detail.timeframes[recurrance].current}hrs</h1>
                    </div>
                    <div className="last-week-stat">
                        {/* <SvgEllipsis /> */}
                        <p>{setRText()} {detail.timeframes[recurrance].previous}hrs</p>
                    </div>
                </section>
            </div>
        )
    })
        ;
    return (
        <>
            {statDetails}
        </>

    )
}
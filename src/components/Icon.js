import React from "react"

import { ReactComponent as Ellipsis } from "../icons/icon-ellipsis.svg";
import { ReactComponent as Exercise } from "../icons/icon-exercise.svg";
import { ReactComponent as Play } from "../icons/icon-play.svg";
import { ReactComponent as SelfCare } from "../icons/icon-self-care.svg";
import { ReactComponent as Social } from "../icons/icon-social.svg";
import { ReactComponent as Study } from "../icons/icon-study.svg";
import { ReactComponent as Work } from "../icons/icon-work.svg";

const iconsMap = {
    Ellipsis,
    Exercise,
    Play,
    SelfCare,
    Social,
    Study,
    Work,
};


function Icon({ title }) {
    const IconComponent = iconsMap[title];

    return (
        <div className="container">
            <img src={title} className="icon" />
            <h2>{title}</h2>
        </div>
    );
}

export default Icon;
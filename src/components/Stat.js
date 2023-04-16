import data from '../data.json'

import { ReactComponent as Ellipsis } from "../icons/icon-ellipsis.svg";


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

        return (
            <div className={`container ${detail.title.toLowerCase()}`}>
                <div title={detail.title} className={`container-tab flex ${detail.title.toLowerCase()}`}>

                    <section className="section-stats grid">
                        <div className="current-stat">
                            <h3>{detail.title}</h3>
                            <h1>{detail.timeframes[recurrance].current}hrs</h1>
                            <p>{setRText()} - {detail.timeframes[recurrance].previous}hrs</p>
                        </div>
                        <Ellipsis class="ellipsis" />
                    </section>

                </div>
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
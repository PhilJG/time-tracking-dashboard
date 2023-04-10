import svg from '../images/icon-ellipsis.svg'
import Data from '../data.json'


export default function Stat({ title }) {
    return (
        <div className="container">
            <div className="container-tab work-tab">
                <img className="svg-style" src={svg} alt='work'></img>
            </div>
            <section className="section-stats flex">
                <div className="current-stat">
                    <h1>{title}</h1>
                    <h1>32hrs</h1>
                </div>
                <div className="last-week-stat">
                    <img src={svg}></img>
                    <p>Last Week - 7hrs</p>
                </div>
            </section>
        </div>
    )
}
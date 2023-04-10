// import svg from '../images/*.svg'
import data from '../data.json'


export default function Stat() {

    const statDetails = data.map(detail =>
        <div className={`container-tab ${detail.title}`}>
            <img className="svg-style" alt={detail.title}></img>
            <section className="section-stats flex">
                <div className="current-stat">
                    <h1>{detail.title}</h1>
                    <h1>Current {detail.timeframes.daily.current}</h1>
                </div>
                <div className="last-week-stat">
                    {/* <img src={svg}></img> */}
                    <p>Last Week {detail.timeframes.daily.current}</p>
                </div>
            </section>
        </div>
    );
    return (
        <div className="container">
            {statDetails}
        </div>
    )
}
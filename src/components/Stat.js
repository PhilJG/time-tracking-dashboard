// import svg from '../images/*.svg'
import data from '../data.json'


export default function Stat({ title }) {
    const statDetails = data.map(detail =>
        <div className="container-tab">
            <img className="svg-style" alt={detail.title}></img>
            <section className="section-stats flex">
                <div className="current-stat">
                    <h1>{detail.title}</h1>
                    <h1>Current {detail.timeframes.current}</h1>
                </div>
                <div className="last-week-stat">
                    {/* <img src={svg}></img> */}
                    <p>Last Week </p>
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
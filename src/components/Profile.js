import userImg from '../images/image-jeremy.png'

export default function Profile({ rBtns }) {


    return (
        <div className="container profile">
            <div className="container-tab profile">
                <section className='user-details flex'>
                    <img className='user-img' src={userImg} alt="Jeremy Robson" height={50} width={50}></img>
                    <div className='user-text column'>Report for <h1 className='user-name'>Jeremy Robson</h1></div>
                </section>
                <section className='details flex'>
                    {rBtns}
                </section>
            </div>
        </div>
    )
}
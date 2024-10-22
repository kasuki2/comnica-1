

export default function TitlePanel({cls, title, text}) {

    return(
        <div className={cls}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}
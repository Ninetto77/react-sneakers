import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    const OnClickButton = () => {
        alert(props.title)
    }
    return (
        <div className={styles.card }>
            <div className={styles.favourite}>
                <img src="/img/heart.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageURL} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{ props.price}</b>
                </div>
                <button className="button" onClick = {()=>OnClickButton() }>
                    <img width={11} height={11} src="/img/btn-plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
        )
}
export default Card;

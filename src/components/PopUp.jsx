export default function PopUp({ onClose, onConfirm }) {
    return (
        <div>
            <div>
                <h3>Item Added To The Cart</h3>
                <button onClick={onConfirm}>Go To Cart</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
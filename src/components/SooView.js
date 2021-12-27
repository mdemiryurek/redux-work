const SooView = (props) => {
    const { visibilityMode } = props;
    return (
        <div>
            <h2>Redux Soo View</h2>
            <p>{visibilityMode.visible ? 'TRUE' : 'FALSE'}</p>
            <button onClick={props.showViews}>
                Show
            </button>
            <button onClick={props.hideViews}>
                Hide
            </button>
        </div>
    )
}

export default SooView;
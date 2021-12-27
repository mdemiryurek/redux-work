const DooView = (props) => {

    const { visibilityMode, year, handleChange } = props;
    
    return(
        <div>
            { visibilityMode.visible && (
                <div>
                    <h2>DOO View</h2>
                    <p>Current year: {year}</p>
                    <input onChange={handleChange}
                        type='text'
                        name='year' />
                </div>
            )}
        </div>
    )
}

export default DooView;
import { useState } from "react";

const FooView = (props) => {
    const [age, setAge] = useState(30);
    const { visibilityMode, year } = props;

    const handleClick = () => {
        setAge(age+1);
    }

    return (
        <div>
            {visibilityMode.visible && (
                <div>
                    <h2>FOO View</h2>
                    <p>Age: {age}</p>
                    <p>Birth year: {(year - age)}</p>
                    <button onClick={() => handleClick()}>
                        Increase age
                    </button>
                </div>
            )}
        </div>
    )
}

export default FooView;
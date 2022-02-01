import colorNames from "colornames";

const Input = ({ colorValue, setColorValue, setHexValue }) => {
    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
            <label htmlFor="">Add Color Name: </label>
            <input
                type="text"
                autoFocus
                required
                placeholder="Add color name"
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
        </form>
    );
};

export default Input;

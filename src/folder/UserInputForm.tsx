const UserInputForm = () => {
    return (
        <div>
        <form>
            <label>
                User Prompt:
                <input type="text" name="prompt" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
};

export default UserInputForm;
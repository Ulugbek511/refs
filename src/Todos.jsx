const Todos = ({ todos }) => {
    console.log("child render");
    return (
        <>
            <h2>my todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{ todo}</p>
            })}
        
        
        </>
    )
}
export default Todos;
function Clock() {
    const date = new Date;
    return (
    <h3> Today is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}</h3>
    )
}

export default Clock
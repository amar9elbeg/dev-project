export const TestComponent = (props: { text: string }) => {
    const { text } = props
    if (text === 'hello') {
        return (<div>this is hello</div>)
    }
    return (
        <div>{text}</div>
    )
}



type OnOffType = {
    selected: boolean
}

export const OnOff = ({ selected }: OnOffType) => {
    return (
        <div>
            <button>On</button>
            <button>Off</button>
            <div>{selected ? "green" : "red"}</div>
        </div>
    )
}

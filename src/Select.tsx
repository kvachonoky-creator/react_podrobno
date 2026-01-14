import { log } from "console"
import { useState } from "react"

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [option, setOption] = useState<boolean>(false)

console.log(props.value)

    return (

        <div>
            <div >
                {option
                    ? props.items.map(i => <div autoFocus tabIndex={0} onBlur={() => setOption(false)} onClick={() => props.onChange(i.value)} key={i.value}>{i.title}</div>)
                    : <div style={{
                        width: "100px",
                        backgroundColor: "#013f2a",
                        height: "20px"
                    }}
                        onClick={() => setOption(true)}
                    >{props.value}</div>
                }
            </div>

        </div>
    )
} 
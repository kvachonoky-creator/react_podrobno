import {useEffect, useRef, useState} from "react"

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

    const onBlurHandler = () => {
        setOption(false)
    }

    const onClickHandler = (value: any) => {
        props.onChange(value)
        onBlurHandler()
    }

    const onClickHandlerFocus = () => {
        setOption(true)
    }


    return (

        <div>
            <div
                 tabIndex={-1} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {option
                    ? props.items.map((i, index) => <div
                        style={{
                            backgroundColor: "#cae4db",
                            width: "100px",
                            height: "20px",
                            border: "1px solid #ccc",
                        }}
                        onBlur={onBlurHandler}
                        onClick={() => onClickHandler(i.value)}
                        key={index}>{i.title}</div>)
                    : <div style={{
                        position: "relative",
                        display: "flex",
                        width: "100px",
                        backgroundColor: "#cae4db",
                        height: "20px"
                    }}
                           onClick={onClickHandlerFocus}
                    >{props.value[0]?.title} <span style={{position: "absolute", content: "", right: "0"}}>↴</span>
                    </div>
                }
            </div>

        </div>
    )
} 
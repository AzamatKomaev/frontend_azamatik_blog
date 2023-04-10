import "./labelled-input.css"

interface ILabelledInput {
    id: string,
    labelContent: string,
    inputContent: string,
    onChange: (e: any) => void
}

const LabelledInput = ({id, labelContent, inputContent, onChange}: ILabelledInput) => {

    return (
        <div className="labelled-input">
            <label htmlFor={id}>{labelContent}</label>
            <input type="text" id={id} value={inputContent} onChange={onChange} />
        </div>
    );
}

export default LabelledInput

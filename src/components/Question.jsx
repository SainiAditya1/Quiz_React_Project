const Question = ({currentQuestion}) => {
    console.log(currentQuestion)

    return (
        <div>
            <h1 className="question">{currentQuestion.question}</h1>
            <div className="options"> 
                {
                    currentQuestion.options.map((option) =>(
                        <label htmlFor="">
                            <input type="radio" value={option.text}/>
                            {option.text}
                        </label>

                    ))
                }
            </div>
        </div>

    )
}

export default Question;
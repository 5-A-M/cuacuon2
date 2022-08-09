const UnKnow= (props)=> {
    return (
        <div className="kalskslweowaplwsaswa" style={{width: "100%"}}>
            <Faq />
        </div>
    )
}

export default UnKnow

const Faq= (props)=> {
    const arrayQuestoin = ["Vì sao cửa thân vân gỗ xu hướng hiện nay", "Cấu tạo của thép vân gỗ", "6 câu điều nên chọn của thép vân gỗ", "Tại sao làm cửa nhà chú ý thông thoáng", "Cửa thép vân gỗ có tốt hay không ?"]
    return (
        <div className="alsasklaskallods" style={{width: "100%"}}>
            {
                arrayQuestoin.map((item, key)=> <Question key={key} item={item} />)
            }
        </div>
    )
}

const Question= (props)=> {
    return (
        <li className="sjiodjaipowuaewp" style={{fontSize: 18}}>
            {props.item}
        </li>
    )
}
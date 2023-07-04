import React from 'react'

interface PropType {
    id: string
    title: string
    isPublish: boolean
    deleteQuestion: (id: string) => void
}

const QuestionCard: React.FC<PropType> = ({ id, title, isPublish, deleteQuestion }) => {
    return <div key={id}>
        <strong>{title}</strong>
        &nbsp;
        {isPublish ? <span style={{ color: 'green' }}>已经发布</span> : <span>未发布</span>}
        <button>编辑问卷</button>
        <button onClick={() => deleteQuestion && deleteQuestion(id)}>删除问卷</button>
    </div>
}

export default QuestionCard
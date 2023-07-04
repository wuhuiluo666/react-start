import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard'

interface ListItem {
    id: string,
    title: string
    isPublished: boolean
}

const List: React.FC = () => {
    const [questionList, setQuestionList] = useState<ListItem[]>([
        { id: 'q1', title: '问卷1', isPublished: false },
        { id: 'q2', title: '问卷2', isPublished: false },
        { id: 'q3', title: '问卷3', isPublished: false },
        { id: 'q4', title: '问卷4', isPublished: true }
    ])
    const addQuestion = () => {
        const randomNum = Math.random().toString().slice(-3)
        setQuestionList([...questionList, {
            id: `q${randomNum}`,
            title: `我是新的问卷${randomNum}`,
            isPublished: false
        }])
    }
    const deleteQuestion = (id: string) => setQuestionList(questionList.filter(question => question.id != id))
    return <div>
        {
            questionList.map(question => {
                const { id, title, isPublished } = question
                return <QuestionCard key={id} id={id} title={title} isPublish={isPublished} deleteQuestion={deleteQuestion} />
            })
        }
        <button onClick={addQuestion}>新增问卷</button>
    </div>
}

export default List
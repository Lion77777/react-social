import React from 'react'
import arrowDown from '../../../../ArrowDown.svg'
import arrowUp from '../../../../ArrowUp.svg'
import doubleArrow from '../../../../DoubleArrow.svg'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'
const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = doubleArrow

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить
    
    return sort === '' ? up : sort === up ? down : ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ display: 'flex', alignItems: 'center' }}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
